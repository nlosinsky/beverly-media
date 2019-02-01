import { Action } from '@ngrx/store';
import { Post } from '../../models';

export enum PostsActionTypes {
  POSTS_REQUEST = '[Posts] posts request',
  POSTS_SUCCESS = '[Posts] posts success',
  POSTS_FAILURE = '[Posts] posts failure',
}

export class PostsRequestAction implements Action {
  readonly type = PostsActionTypes.POSTS_REQUEST;
}

export class PostsSuccessAction implements Action {
  readonly type = PostsActionTypes.POSTS_SUCCESS;

  constructor(public payload: Post[]) {}
}

export class PostsFailureAction implements Action {
  readonly type = PostsActionTypes.POSTS_FAILURE;

  constructor(public payload: string) {}
}

export type PostsActions = PostsRequestAction | PostsSuccessAction | PostsFailureAction;
