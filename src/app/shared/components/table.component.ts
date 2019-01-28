import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() set items(data: any[]) {
    if (!data) {
      return;
    }

    // todo
  }

  constructor() {}

  ngOnInit(): void {
  }
}

