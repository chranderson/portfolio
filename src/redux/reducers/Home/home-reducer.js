import * as types from '../../actions/action-types';

const initialState = {
  currentTime: new Date().toLocaleTimeString()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TIME:
      const currentTime = action.currentTime.slice();
      return {
        ...state,
        currentTime
      };
    default:
      return state;
  }
};
