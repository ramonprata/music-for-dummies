import { ascendingChromaticNotes, scaleSteps, naturalNotes } from './defaultValues';
const { semiTone, tone } = scaleSteps;

const getNoteIndex = (fromNote, notes) => {
  const noteIndex = notes.findIndex((note) => note === fromNote);
  return noteIndex;
};

export const getNextNotes = (fromNote, notes) => {
  const indexStartNote = getNoteIndex(fromNote, notes);
  const beforeNotes = notes.slice(0, indexStartNote);
  const afterNotes = notes.slice(indexStartNote, notes.length);
  return [...afterNotes, ...beforeNotes];
};

const mountIntervals = (pattern, numberOfNotes) => {
  let mountedPattern = [];
  for (let index = 0; index < numberOfNotes; index++) {
    if (mountedPattern.length < numberOfNotes) {
      mountedPattern = mountedPattern.concat(...pattern);
    }
  }
  return mountedPattern.slice(0, numberOfNotes);
};

const getNextAscendingNote = (currentNote, scaleSteps) => {
  const currentNoteIndex = getNoteIndex(currentNote, ascendingChromaticNotes);
  const indexJump = currentNoteIndex + Number(scaleSteps / semiTone);
  if (indexJump >= ascendingChromaticNotes.length) {
    const overpassedIndex = indexJump - ascendingChromaticNotes.length;
    return ascendingChromaticNotes[overpassedIndex];
  }
  return ascendingChromaticNotes[indexJump];
};

const getScale = (fromNote, pattern, numberOfNotes = 7) => {
  const intervals = mountIntervals(pattern, numberOfNotes);
  let currentNote = fromNote;
  const scale = intervals.map((interval) => {
    const nextNote = getNextAscendingNote(currentNote, interval);
    currentNote = nextNote;
    return nextNote;
  });
  return [fromNote, ...scale];
};

const removeSharp = (note) => {
  return note.includes('#') ? note.replace('#', '') : note;
};

const applyAccidend = (note, diff) => {
  const isNegative = diff < 0;
  const accidentApply = isNegative ? 'b' : '#';
  const absoluteDiff = Math.abs(diff);
  const accidents = String(accidentApply).repeat(absoluteDiff);
  return `${note}${accidents}`;
};

const applyEnharmonic = (scale, fromNote) => {
  const chromaticScaleFromNote = getChromaticScale(fromNote);
  const naturalScaleNotes = getNextNotes(removeSharp(fromNote), naturalNotes);
  return scale.map((scaleNote, idx) => {
    if (idx > 0) {
      const naturalScaleNote = naturalScaleNotes[idx];
      const indexNaturalNote = getNoteIndex(naturalScaleNote, chromaticScaleFromNote);
      const indexScaleNote = getNoteIndex(scaleNote, chromaticScaleFromNote);
      const diff = indexScaleNote - indexNaturalNote;
      const modifiedNote = applyAccidend(naturalScaleNote, diff);
      return modifiedNote;
    }
    return scaleNote;
  });
};

export const getChromaticScale = (fromNote = 'A') => {
  return getNextNotes(fromNote, ascendingChromaticNotes);
};

export const getMajorScale = (fromNote = 'A', numberOfNotes = 6) => {
  const pattern = [tone, tone, semiTone, tone, tone, tone, semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const enharmonicScale = applyEnharmonic(scale, fromNote);
  return enharmonicScale;
};

export const getMinorScale = (fromNote = 'A', numberOfNotes = 6) => {
  const pattern = [tone, semiTone, tone, tone, semiTone, tone, tone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const enharmonicScale = applyEnharmonic(scale, fromNote);
  return enharmonicScale;
};

export const getScales = (fromNote = 'A', numberOfNotes = 6) => {
  return {
    chromatic: getChromaticScale(fromNote),
    major: getMajorScale(fromNote),
    minor: getMinorScale(fromNote),
  };
};
