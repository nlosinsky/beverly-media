import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    PostsComponent
  ],
  declarations: [
    PostsComponent
  ],
  providers: [],
})
export class FeaturesModule {
}
