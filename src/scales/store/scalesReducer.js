import { SET_SELECTED_SCALE } from './scalesActions';

export const scalesInitialState = {
  scaleName: 'note',
};

export const scalesReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_SCALE:
      return {
        ...state,
        showNotesOnInstrument: true,
        scaleName: action.payload,
      };

    default:
      return state;
  }
};
