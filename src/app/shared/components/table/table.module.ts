import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent
  ],
  declarations: [
    TableComponent
  ],
  providers: [
    TableService
  ],
})
export class TableModule {
}
