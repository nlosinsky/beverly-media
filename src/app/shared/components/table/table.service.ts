import { Injectable } from '@angular/core';
import { TableSort } from './table.models';

const DESC = 'desc';

@Injectable()
export class TableService {

  constructor() {}

  sortItems<Item>(items: Item[], sort: TableSort): Item[] {
    const field = sort.field;

    return items.sort((a, b) => {
      const aField = a[field];
      const bField = b[field];

      if (!sort || !sort.dir) {
        return 0;
      }

      if (typeof aField === 'string') {
        return sort.dir === DESC ? bField.localeCompare(aField) : aField.localeCompare(bField);
      }

      return sort.dir === DESC ? bField - aField : aField - bField;
    });
  }
}
