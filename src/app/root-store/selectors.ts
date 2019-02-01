import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PostsSelectors } from './posts-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  PostsSelectors.selectPostsError,
  (postsError: string) => {
    return postsError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  PostsSelectors.selectPostsIsLoading,
  (postsIsLoading: boolean) => {
    return postsIsLoading;
  }
);
