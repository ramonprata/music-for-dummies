import { SET_SELECTED_CHORD } from './chordsActions';

export const scalesInitialState = {
  chord: '',
};

export const scalesReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_CHORD:
      return {
        ...state,
        showNotesOnInstrument: true,
        chord: action.payload,
      };

    default:
      return state;
  }
};
