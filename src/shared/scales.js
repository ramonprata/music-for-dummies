import {
  ascendingChromaticNotes,
  scaleSteps,
  descendingChromaticScale,
  naturalNotes,
} from './defaultValues';
const { semiTone, tone } = scaleSteps;

const getNoteIndex = (fromNote, notes) => {
  const noteIndex = notes.findIndex((note) => note === fromNote);
  return noteIndex >= 0 ? noteIndex : 0;
};

export const getNextNotes = (fromNote, notes) => {
  const indexStartNote = getNoteIndex(fromNote, naturalNotes);
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

export const getAscendingChromaticScale = (fromNote = 'A', numberOfNotes = 0) => {
  const pattern = [semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  return scale;
};

const removeSharp = (note) => {
  return note.includes('#') ? note.replace('#', '') : note;
};

const applyAccidend = (note, diff) => {
  const sharps = String('#').repeat(diff);
  return `${note}${sharps}`;
};

const applyEnharmonic = (scale, fromNote) => {
  const naturaNotesScale = getNextNotes(removeSharp(fromNote), naturalNotes);
  return scale.map((scaleNote, idx) => {
    const chromaticScale = getNextNotes(naturaNotesScale[idx], ascendingChromaticNotes);
    const indexNaturalNote = getNoteIndex(naturaNotesScale[idx], chromaticScale);
    const indexScaleNote = getNoteIndex(scaleNote, chromaticScale);
    const diff = indexScaleNote - indexNaturalNote;
    return applyAccidend(naturaNotesScale[idx], diff);
  });
};

export const getMajorScale = (fromNote = 'A', numberOfNotes = 0) => {
  const pattern = [tone, tone, semiTone, tone, tone, tone, semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const enharmonicScale = applyEnharmonic(scale, fromNote);
  console.log('enharmonicScale :>> ', enharmonicScale);
};

export const getMinorScale = (fromNote = 'A', numberOfNotes = 0) => {
  const pattern = [tone, semiTone, tone, tone, semiTone, tone, tone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  return scale;
};
