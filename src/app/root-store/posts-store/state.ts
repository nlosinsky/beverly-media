import { Post } from '../../models';

export interface State {
  posts: Post[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  posts: [],
  isLoading: false,
  error: null
};
