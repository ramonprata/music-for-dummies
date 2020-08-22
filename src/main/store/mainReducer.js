import { TOGGLE_SHOW_NOTES_INSTRUMENT, SELECT_INSTRUMENT, SELECT_NECK_MODEL } from './mainActions';
import { INSTRUMENTS, getInstrumentStrings } from '../../shared';

const [guitar, ukulele] = Object.keys(INSTRUMENTS);

export const mainInitState = {
  showNotesOnInstrument: false,
  instrument: guitar,
  instrumentStrings: getInstrumentStrings(guitar),
  selectedNeckModel: 'wood',
};

export const mainReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NOTES_INSTRUMENT:
      return {
        ...state,
        showNotesOnInstrument: !state.showNotesOnInstrument,
      };
    case SELECT_INSTRUMENT:
      return {
        ...state,
        instrument: action.payload,
        instrumentStrings: getInstrumentStrings(action.payload),
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
