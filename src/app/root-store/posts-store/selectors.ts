import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Post } from '../../models';
import { State } from './state';

const getPosts = (state: State) => state.posts;
const getError = (state: State) => state.error;
const getIsLoading = (state: State) => state.isLoading;

export const selectPostsState: MemoizedSelector<object, State> = createFeatureSelector<State>('posts');
export const selectPosts: MemoizedSelector<object, Post[]> = createSelector(selectPostsState, getPosts);
export const selectPostsIsLoading: MemoizedSelector<object, boolean> = createSelector(selectPostsState, getIsLoading);
export const selectPostsError: MemoizedSelector<object, any> = createSelector(selectPostsState, getError);
