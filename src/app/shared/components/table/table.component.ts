import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TableSettings, TableSort } from './table.models';
import { TableService } from './table.service';

const DESC = 'desc';
const ASC = 'asc';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  items: any[];
  fields: string[];
  sort: TableSort;

  @Input() settings: TableSettings;
  @Input() set data(data: any[]) {
    if (!data || !data.length) {
      return;
    }

    this.sort = {...this.settings.sort};
    this.items = this.service.sortItems(data, this.sort);
    this.fields = Object.keys(data[0]);
  }

  constructor(
    private service: TableService
  ) {}

  ngOnInit(): void {}

  changeSort(event: MouseEvent, field: string): void {
    event.preventDefault();

    this.sort = {
      dir: (this.sort.dir === DESC) ? ASC : DESC,
      field
    };

    this.items = this.service.sortItems(this.items, this.sort);
  }

  trackByTitles(index: number, title: string): string {
    return title;
  }

  trackByRows(index: number, row: any): number {
    return row.id;
  }

  trackByCells(index: number, field: string): string {
    return field;
  }
}

