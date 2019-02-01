import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../models';
import { RootStoreState, PostsSelectors, PostsActions } from '../../root-store';
import { TableSettings } from '../../shared/components/table/table.models';

@Component({
  selector: 'posts',
  templateUrl: 'posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;
  settings: TableSettings = {
    labels: {
      userId: 'User ID',
      id: 'ID',
      title: 'Title',
      body: 'Body'
    },
    sort: {
      field: 'id',
      dir: 'asc'
    }
  };

  constructor(
    private store$: Store<RootStoreState.State>
  ) {}

  ngOnInit(): void {
    this.posts$ = this.store$.select(PostsSelectors.selectPosts);
    this.error$ = this.store$.select(PostsSelectors.selectPostsError);
    this.isLoading$ = this.store$.select(PostsSelectors.selectPostsIsLoading);

    this.store$.dispatch(new PostsActions.PostsRequestAction());
  }
}
