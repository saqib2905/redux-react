import { FETCH_POSTS, NEW_POST } from '../actions/Types';

const initialState = {
  items: [],
  item: {},
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
