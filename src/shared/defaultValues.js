export const DEFAULT_INSTRUMENT = 'guitar';
export const MARK_FRETS_BOARD_GUITAR = [2, 4, 6, 11];
export const MARK_FRETS_BOARD_UKE = [2, 4, 6, 9, 11];
export const FRETS_BOARD = 14;
export const MAX_ROOM_WIDTH = 1800 / FRETS_BOARD;
export const GRID_NOTE_LINE_HEIGHT = 36;
export const INSTRUMENTS = {
  guitar: {
    get strings() {
      return ['E', 'A', 'D', 'G', 'B', 'E'];
    },
  },
  ukulele: {
    get strings() {
      return ['G', 'C', 'E', 'A'];
    },
  },
};
export const DEFAULT_INTERVALS = [1, 2, 3, 4, 5, 6, 7];

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

export const naturalNotes = [
  {
    get id() {
      return 1;
    },
    get note() {
      return 'C';
    },
  },
  {
    get id() {
      return 2;
    },
    get note() {
      return 'D';
    },
  },
  {
    get id() {
      return 3;
    },
    get note() {
      return 'E';
    },
  },
  {
    get id() {
      return 4;
    },
    get note() {
      return 'F';
    },
  },
  {
    get id() {
      return 5;
    },
    get note() {
      return 'G';
    },
  },
  {
    get id() {
      return 6;
    },
    get note() {
      return 'A';
    },
  },
  {
    get id() {
      return 7;
    },
    get note() {
      return 'B';
    },
  },
];

export const scaleSteps = {
  get semiTone() {
    return 0.5;
  },
  get tone() {
    return 1;
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
