import { SET_SELECTED_SCALE, SET_SELECTED_NOTE } from './scalesActions';
import { getScales } from '../../shared/scales';

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
        selectedScale: {
          ...scalesInitialState.selectedScale,
        },
      };

    default:
      return state;
  }
};
