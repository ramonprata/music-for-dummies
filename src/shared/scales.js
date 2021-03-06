import {
  ascendingChromaticNotes,
  scaleSteps,
  naturalNotes,
  DEFAULT_INTERVALS,
} from './defaultValues';
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

export const getNextAscendingNote = (currentNote, scaleSteps) => {
  const currentNoteIndex = getNoteIndex(currentNote, ascendingChromaticNotes);
  const indexJump = currentNoteIndex + Number(scaleSteps / semiTone);
  if (indexJump >= ascendingChromaticNotes.length) {
    const overpassedIndex = indexJump - ascendingChromaticNotes.length;
    return ascendingChromaticNotes[overpassedIndex];
  }
  return ascendingChromaticNotes[indexJump];
};

export const getScale = (fromNote, pattern, numberOfNotes = 7) => {
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

const getSortedNotes = () => {
  return naturalNotes.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id === b.id) return 0;
    return -1;
  });
};

const getNotesFromIntervals = (notes = [], intervals = []) => {
  return notes.filter((_, idx) => intervals.includes(idx + 1));
};

export const applyEnharmonic = (scale, fromNote, intervals = DEFAULT_INTERVALS) => {
  const chromaticScaleFromNote = getChromaticScale(fromNote);
  const mappedNaturalNotes = getSortedNotes().map((item) => item.note);
  const naturalScaleNotes = getNextNotes(removeSharp(fromNote), mappedNaturalNotes);
  const notesFromIntervals = getNotesFromIntervals(naturalScaleNotes, intervals);
  return scale.map((scaleNote, idx) => {
    if (idx > 0) {
      const naturalScaleNote = notesFromIntervals[idx];
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
  return {
    scale,
    enharmonicScale,
  };
};

export const getMinorScale = (fromNote = 'A', numberOfNotes = 6) => {
  const pattern = [tone, semiTone, tone, tone, semiTone, tone, tone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const enharmonicScale = applyEnharmonic(scale, fromNote);
  return {
    scale,
    enharmonicScale,
  };
};

export const getMajorPentatonic = (fromNote = 'A', numberOfNotes = 4) => {
  const pattern = [tone, tone, tone + semiTone, tone, tone, tone + semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const intervals = [1, 2, 3, 5, 6];
  const enharmonicScale = applyEnharmonic(scale, fromNote, intervals);
  return {
    scale,
    enharmonicScale: enharmonicScale,
  };
};

export const getMinorPentatonic = (fromNote = 'A', numberOfNotes = 4) => {
  const pattern = [tone + semiTone, tone, tone, tone + semiTone, tone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  const intervals = [1, 3, 4, 5, 7];
  const enharmonicScale = applyEnharmonic(scale, fromNote, intervals);
  return {
    scale,
    enharmonicScale: enharmonicScale,
  };
};

export const getMajorPentaBlues = (fromNote = 'A', numberOfNotes = 5) => {
  const pattern = [tone, semiTone, semiTone, tone + semiTone, tone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  return {
    scale,
    enharmonicScale: [],
  };
};

export const getMinorPentaBlues = (fromNote = 'A', numberOfNotes = 5) => {
  const pattern = [tone + semiTone, tone, semiTone, semiTone, tone + semiTone];
  const scale = getScale(fromNote, pattern, numberOfNotes);
  return {
    scale,
    enharmonicScale: [],
  };
};

export const getScales = (fromNote = 'A', numberOfNotes = 6) => {
  return {
    note: { scale: [fromNote] },
    chromatic: {
      scale: getChromaticScale(fromNote),
      enharmonicScale: getChromaticScale(fromNote),
    },
    major: getMajorScale(fromNote),
    minor: getMinorScale(fromNote),
    majorPentatonic: getMajorPentatonic(fromNote),
    minorPentatonic: getMinorPentatonic(fromNote),
    majorPentaBlues: getMajorPentaBlues(fromNote),
    minorPentaBlues: getMinorPentaBlues(fromNote),
  };
};
