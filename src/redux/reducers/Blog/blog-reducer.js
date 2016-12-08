const LOAD_AUTHORS = 'blog/LOAD_AUTHORS';
const LOAD_POSTS = 'blog/LOAD_POSTS';
const UPDATE_FEATURE = 'blog/UPDATE_FEATURE';

const initialState = {
  authors: [],
  featureId: '',
  loading: false,
  posts: [],
  time: new Date().toLocaleTimeString(),
};

export default (state = initialState, action) => {

  switch (action.type) {
    case LOAD_AUTHORS:
      return {
        ...state,
        authors: action.authors.data,
      };
    case LOAD_POSTS:
      return {
        ...state,
        featureId: action.posts.featureId,
        posts: action.posts.data
      };
    case UPDATE_FEATURE:
      return {
        ...state,
        featureId: action.newFeatureId
      };
    default:
      return state;
  }
};

export function loadAuthors(authors) {
  return {
    type: LOAD_AUTHORS,
    authors
  };
}

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  };
}

export function updateFeature(newFeatureId) {
  return {
    type: UPDATE_FEATURE,
    newFeatureId
  };
}
