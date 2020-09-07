import { SET_SELECTED_SCALE } from './scalesActions';

export const scalesInitialState = {
  scaleName: '',
};

export const scalesReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_SCALE:
      return {
        ...state,
        scaleName: action.payload,
      };

    default:
      return state;
  }
};
