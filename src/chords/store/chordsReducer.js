import { SET_SELECTED_CHORD } from './chordsActions';

export const chordsInitialState = {
  selectedChord: 'major',
};

export const chordReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_CHORD:
      return {
        ...state,
        showNotesOnInstrument: true,
        selectedChord: action.payload,
      };

    default:
      return state;
  }
};
