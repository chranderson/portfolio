const LOAD_POSTS = 'blog/LOAD_POSTS';

const initialState = {
  loading: false,
  posts: [],
  time: new Date().toLocaleTimeString(),
};

export default (state = initialState, action) => {
  // console.log('posts: ', state.posts.data);
  switch (action.type) {
    case LOAD_POSTS:
      console.log('posts: ', action.posts);
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
};


export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  };
}
