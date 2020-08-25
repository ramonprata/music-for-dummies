import { TOGGLE_SHOW_NOTES_INSTRUMENT, SELECT_INSTRUMENT, SELECT_NECK_MODEL } from './panelActions';
import { INSTRUMENTS } from '../../shared';

const [guitar] = Object.keys(INSTRUMENTS);

export const panelInitialState = {
  showNotesOnInstrument: false,
  selectedInstrument: guitar,
  selectedNeckModel: 'wood',
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
    default:
      return state;
  }
};
