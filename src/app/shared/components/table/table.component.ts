import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
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
export class TableComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private search$: BehaviorSubject<any> = new BehaviorSubject('');

  items: any[] = [];
  origItems: any[] = [];
  fields: string[] = [];
  sort: TableSort;

  @Input() settings: TableSettings;
  @Input() set data(data: any[]) {
    if (!data || !data.length) {
      return;
    }

    this.sort = {...this.settings.sort};
    this.origItems = this.service.sortItems(data, this.sort);
    this.fields = Object.keys(data[0]);
  }

  constructor(
    private service: TableService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.searchPosts();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

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

  onKeyUp(event: KeyboardEvent): void {
    const text = (<HTMLInputElement>event.target).value;
    this.search$.next(text);
  }

  private searchPosts(): void {
    this.search$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        distinctUntilChanged(),
        debounceTime(300)
      )
      .subscribe((searchText: string) => {
        if (!searchText) {
          this.items = this.origItems;
        }

        this.items = this.origItems.filter(({title}) => title.indexOf(searchText) !== -1);
        this.cd.detectChanges();
      });
  }
}

