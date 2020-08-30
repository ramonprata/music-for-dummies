import { SET_SELECTED_SCALE, SET_SELECTED_NOTE } from './scalesActions';

export const scalesInitialState = {
  selectedNote: 'A',
  scaleName: '',
};

export const scalesReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_SCALE:
      return {
        ...state,
        scaleName: action.payload,
      };
    case SET_SELECTED_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
      };

    default:
      return state;
  }
};
