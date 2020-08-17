import { ascendingChromaticNotes, scaleSteps, descendingChromaticScale } from './defaultValues';
const { semiTone, tone } = scaleSteps;

const mountIntervals = (pattern, numberOfNotes) => {
  let mountedPattern = [];
  for (let index = 0; index < numberOfNotes; index++) {
    if (mountedPattern.length < numberOfNotes) {
      mountedPattern = mountedPattern.concat(...pattern);
    }
  }
  return mountedPattern.slice(0, numberOfNotes);
};

const getNoteIndex = (fromNote) => {
  const noteIndex = ascendingChromaticNotes.findIndex((note) => note === fromNote);
  return noteIndex >= 0 ? noteIndex : 0;
};

const getNextAscendingNote = (currentNote, scaleSteps) => {
  const currentNoteIndex = getNoteIndex(currentNote);
  const indexJump = currentNoteIndex + Number(scaleSteps / semiTone);
  if (indexJump >= ascendingChromaticNotes.length) {
    const overpassedIndex = indexJump - ascendingChromaticNotes.length;
    return ascendingChromaticNotes[overpassedIndex];
  }
  return ascendingChromaticNotes[indexJump];
};

const getScale = (fromNote, pattern, numberOfNotes) => {
  const intervals = mountIntervals(pattern, numberOfNotes);
  let currentNote = fromNote;
  const scale = intervals.map((interval) => {
    const nextNote = getNextAscendingNote(currentNote, interval);
    currentNote = nextNote;
    return nextNote;
  });
  return [fromNote, ...scale];
};

const mapFlatNotes = (scale = []) => {
  const flatNotesIndexes = scale.map((scaleNote) =>
    ascendingChromaticNotes.findIndex((note) => note === scaleNote)
  );
  return flatNotesIndexes.map((descNoteIndex) => descendingChromaticScale[descNoteIndex]);
};

export const getAscendingChromaticScale = (fromNote = 'A', numberOfNotes = 0) => {
  const pattern = [semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  // console.log('AscendingChromaticScale :>> ', scale);
  return scale;
};

export const getMajorScale = (fromNote = 'A', numberOfNotes = 0) => {
  const pattern = [tone, tone, semiTone, tone, tone, tone, semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  // console.log('MajorScale :>> ', scale);
  return scale;
};

export const getMinorScale = (fromNote = 'A', numberOfNotes = 0) => {
  const pattern = [tone, semiTone, tone, tone, semiTone, tone, tone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const minorScale = mapFlatNotes(scale);
  console.log('scale :>> ', scale);
  console.log('MinorScale :>> ', minorScale);
  return minorScale;
};
