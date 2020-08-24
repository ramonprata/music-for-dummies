import { SET_SCALE, SET_SELECTED_NOTE } from './scalesActions';
import { getScales } from '../../shared/scales';

export const scalesInitialState = {
  selectedNote: 'A',
  selectedScale: {
    scaleName: '',
    naturalNotes: [],
  },
};

export const scalesReducer = (state, action) => {
  switch (action.type) {
    case SET_SCALE:
      const { scale } = getScales(state.selectedNote)[action.payload]();
      return {
        ...state,
        selectedScale: {
          scaleName: action.payload,
          naturalNotes: scale,
        },
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
