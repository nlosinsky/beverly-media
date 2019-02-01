import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, delay, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { PostsActionTypes, PostsRequestAction, PostsSuccessAction, PostsFailureAction } from './actions';

@Injectable()
export class PostsStoreEffects {
  constructor(
    private api: ApiService,
    private $actions: Actions
  ) {}

  @Effect()
  postsRequestEffect$: Observable<Action> = this.$actions.pipe(
    ofType<PostsRequestAction>(
      PostsActionTypes.POSTS_REQUEST
    ),
    switchMap(() => {
      return this.api.getPosts()
        .pipe(
          map(posts => new PostsSuccessAction(posts)),
          catchError(error => of(new PostsFailureAction(error)))
        );
    })
  );
}
