import {
  TOGGLE_SHOW_NOTES_INSTRUMENT,
  SELECT_INSTRUMENT,
  SELECT_NECK_MODEL,
  SET_SELECTED_NOTE,
} from './panelActions';
import { DEFAULT_INSTRUMENT } from '../../shared';

export const panelInitialState = {
  selectedNote: 'C',
  showNotesOnInstrument: false,
  selectedInstrument: DEFAULT_INSTRUMENT,
  selectedNeckModel: 'wood8',
};

export const panelReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NOTES_INSTRUMENT:
      return {
        ...state,
        showNotesOnInstrument: !state.showNotesOnInstrument,
      };

    case SELECT_INSTRUMENT:
      return {
        ...state,
        selectedInstrument: action.payload,
      };

    case SELECT_NECK_MODEL:
      return {
        ...state,
        selectedNeckModel: action.payload,
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
