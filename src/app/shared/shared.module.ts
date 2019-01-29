import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './components/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TableModule
  ],
  declarations: [

  ]
})
export class SharedModule { }
