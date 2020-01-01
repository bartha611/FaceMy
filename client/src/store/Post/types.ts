export const LOAD_POST = "LOAD_POST";
export const CREATE_POST = "CREATE_POST";
export const READ_POST = "READ_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const ERROR_POST = "ERROR_POST";

export interface PostState {
  loading: boolean;
  posts: Post[];
  error: boolean;
}

export interface Post {
  id: number;
  message: string;
  created_at: Date;
}
