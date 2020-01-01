import * as types from "./types";
import { postActionType } from "./action";

const initialState: types.PostState = {
  loading: false,
  posts: [],
  error: false
};

const PostReducer = (
  state = initialState,
  action: postActionType
): types.PostState => {
  switch (action.type) {
    case types.CREATE_POST:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload]
      };
    case types.READ_POST:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case types.UPDATE_POST:
      return {
        ...state,
        loading: false,
        posts: [
          ...state.posts.slice(0, action.meta.index),
          action.payload,
          ...state.posts.slice(action.meta.index + 1, state.posts.length)
        ]
      };
    case types.DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(obj => obj.id !== action.meta.id)
      };
    default:
      return state;
  }
};

export default PostReducer;
