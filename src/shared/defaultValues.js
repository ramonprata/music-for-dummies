export const ascendingChromaticNotes = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];
export const descendingChromaticScale = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'C',
];

export const defaultIntervals = [1, 2, 3, 4, 5, 6, 7];
export const naturalNotes = [
  {
    id: 1,
    note: 'C',
  },
  {
    id: 2,
    note: 'D',
  },
  {
    id: 3,
    note: 'E',
  },
  {
    id: 4,
    note: 'F',
  },
  {
    id: 5,
    note: 'G',
  },
  {
    id: 6,
    note: 'A',
  },
  {
    id: 7,
    note: 'B',
  },
];

export const scaleSteps = {
  semiTone: 0.5,
  tone: 1,
};

export const DEFAULT_INSTRUMENT = 'guitar';

export const MARK_FRETS_BOARD_GUITAR = [2, 4, 6, 11];
export const MARK_FRETS_BOARD_UKE = [2, 4, 6, 9, 11];
export const FRETS_BOARD = 11;
export const MAX_ROOM_WIDTH = 1500 / FRETS_BOARD;
export const GRID_NOTE_LINE_HEIGHT = 34;

export const INSTRUMENTS = {
  guitar: {
    strings: ['E', 'A', 'D', 'G', 'B', 'E'],
  },
  ukulele: {
    strings: ['G', 'C', 'E', 'A'],
  },
};

const { tone, semiTone } = scaleSteps;
export const degrees = {
  '2dim': [],
  '2m': [semiTone],
  '2M': [tone],
  '2+': [tone, semiTone],
  '3dim': [tone],
  '3m': [tone, semiTone],
  '3M': [tone, tone],
  '3+': [tone, tone, semiTone],
  '4dim': [tone, tone],
  4: [tone, tone, semiTone],
  '4+': [tone, tone, tone],
  '5dim': [tone, tone, tone],
  5: [tone, tone, tone, semiTone],
  '5+': [tone, tone, tone, tone],
  '6dim': [tone, tone, tone, semiTone],
  '6m': [tone, tone, tone, tone],
  '6M': [tone, tone, tone, tone, semiTone],
  '6+': [tone, tone, tone, tone, tone],
  '7dim': [tone, tone, tone, tone, semiTone],
  '7m': [tone, tone, tone, tone, tone],
  '7M': [tone, tone, tone, tone, tone, semiTone],
  '7+': [tone, tone, tone, tone, tone, tone],
};
