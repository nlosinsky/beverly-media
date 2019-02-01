import { PostsActions, PostsActionTypes } from './actions';
import { initialState, State } from './state';


export function reducer(state: State = initialState, action: PostsActions): State {
  switch (action.type) {
    case PostsActionTypes.POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case PostsActionTypes.POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
        isLoading: false
      };
    case PostsActionTypes.POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
