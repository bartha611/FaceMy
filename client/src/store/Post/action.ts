import * as types from "./types";

interface loadPost {
  type: typeof types.LOAD_POST;
}

interface errorPost {
  type: typeof types.ERROR_POST;
}

interface createPost {
  type: typeof types.CREATE_POST;
  payload: types.Post;
}

interface readPost {
  type: typeof types.READ_POST;
  payload: types.Post[];
}

interface updatePost {
  type: typeof types.UPDATE_POST;
  payload: types.Post;
  meta: {
    index: number;
  };
}

interface deletePost {
  type: typeof types.DELETE_POST;
  meta: {
    id: number;
  };
}

export type postActionType = createPost | readPost | updatePost | deletePost;
