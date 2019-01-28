import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiService } from './api.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

const PROVIDERS = [
  ApiService
];

@NgModule({
  declarations: [],
  imports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: CoreModule,
      providers: [
        ...PROVIDERS
      ]
    };
  }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
