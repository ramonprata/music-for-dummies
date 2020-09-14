import { defaultTheme } from '../theme';
import {
  FRETS_BOARD,
  MAX_ROOM_WIDTH,
  INSTRUMENTS,
  MARK_FRETS_BOARD_UKE,
  MARK_FRETS_BOARD_GUITAR,
  DEFAULT_INSTRUMENT,
  scaleSteps,
} from './defaultValues';
import { getScale } from './scales';

const { semiTone } = scaleSteps;
const wood = require('../images/wood.jpg');
const wood4 = require('../images/wood4.jpg');
const wood3 = require('../images/wood3.jpg');
const wood7 = require('../images/wood7.jpg');
const wood8 = require('../images/wood8.jpg');
const wood9 = require('../images/wood9.jpg');
const wood10 = require('../images/wood10.jpg');

export const NECK_WIDTH = (() => {
  return Array(FRETS_BOARD)
    .fill(0)
    .reduce((a, c, idx) => {
      return (a += Number(MAX_ROOM_WIDTH - idx * 6));
    });
})();

export const calcGridNoteWidth = (idx = 0) => {
  return Number(MAX_ROOM_WIDTH - idx * 5.5);
};

export const getInstrumentStrings = (instrument) => {
  return INSTRUMENTS[instrument].strings;
};

export const getStringNotes = (fromNote = 'A') => {
  const pattern = Array(FRETS_BOARD)
    .fill(true)
    .map((room) => semiTone);
  return getScale(fromNote, pattern, FRETS_BOARD + 1);
};

export const woodNecksDesign = {
  wood: wood,
  wood3: wood3,
  wood4: wood4,
  wood7: wood7,
  wood8: wood8,
  wood9: wood9,
  wood10: wood10,
};

export const woodNames = ['wood', 'wood4', 'wood3', 'wood7', 'wood8', 'wood9', 'wood10'];

export const getMarkers = (instrument = DEFAULT_INSTRUMENT) => {
  return instrument === DEFAULT_INSTRUMENT ? MARK_FRETS_BOARD_GUITAR : MARK_FRETS_BOARD_UKE;
};

export const isGuitarSelected = (selectedInstrument) => {
  return selectedInstrument === 'guitar';
};

export const isUkeSelected = (selectedInstrument) => {
  return selectedInstrument === 'ukulele';
};

export const getNextAvailableColor = (idx = 0) => {
  const color = defaultTheme.activeNotesColors[idx];
  return color || defaultTheme.activeNotesColors[0];
};
