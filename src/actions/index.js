export const INCREMENT_LIKE = 'INCREMENT_LIKE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function increment(index) {
  return {
    type: INCREMENT_LIKE,
    index
  };
}

export function addComment(postid, name, comment) {
  return {
    type: ADD_COMMENT,
    postid,
    name,
    comment
  };
}

export function removeComment(postid, index) {
  return {
    type: REMOVE_COMMENT,
    postid,
    index
  };
}
