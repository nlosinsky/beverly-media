import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './components/table/table.module';

const MODULES = [
  CommonModule,
  TableModule
];
const PROVIDERS = [];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: SharedModule,
      providers: [...PROVIDERS]
    };
  }
  constructor() {
  }
}
