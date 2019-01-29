export interface TableSort {
  field: string;
  dir: string;
}

export interface TableSettings {
  labels: {
    [key: string]: string;
  };
  sort: TableSort;
}
