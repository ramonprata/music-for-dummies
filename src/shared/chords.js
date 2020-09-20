import { degrees } from './defaultValues';
import { getNextAscendingNote } from './scales';
import { applyEnharmonic } from './scales';

export const mountPattern = (intervals = []) => {
  return intervals
    .map((interval) => {
      if (interval === 'T') {
        return [0];
      } else {
        return degrees[interval];
      }
    })
    .map((degrees) => degrees.reduce((current, accumulator) => accumulator + current));
};

export const mountChord = (note = 'C', intervals = [], notation) => {
  const pattern = mountPattern(intervals);
  const chordNotes = pattern.map((p) => getNextAscendingNote(note, p));
  return {
    chordNotes,
    intervals: intervals,
    notation,
  };
};

export const getMajorChord = (note = 'C') => {
  const intervals = ['T', '3M', '5'];
  const mountedChord = mountChord(note, intervals, note);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getMinorChord = (note = 'C') => {
  const intervals = ['T', '3m', '5'];
  const mountedChord = mountChord(note, intervals, `${note}m`);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getMajorWithMinorSeventh = (note = 'C') => {
  const intervals = ['T', '3M', '5', '7m'];
  const mountedChord = mountChord(note, intervals, `${note}7`);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5, 7]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getMinorWithMinorSeventh = (note = 'C') => {
  const intervals = ['T', '3m', '5', '7m'];
  const mountedChord = mountChord(note, intervals, `${note}m7`);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5, 7]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getMajorWithMajorSeventh = (note = 'C') => {
  const intervals = ['T', '3M', '5', '7M'];
  const mountedChord = mountChord(note, intervals, `${note}7M`);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5, 7]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getDiminishedTriad = (note = 'C') => {
  const intervals = ['T', '3m', '5dim'];
  const mountedChord = mountChord(note, intervals, `${note}°`);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getDiminishedSeventh = (note = 'C') => {
  const intervals = ['T', '3m', '5dim', '7dim'];
  const mountedChord = mountChord(note, intervals, `${note}dim7`);
  const enharmonicChord = applyEnharmonic(mountedChord.chordNotes, note, [1, 3, 5, 7]);
  return {
    ...mountedChord,
    enharmonicChord,
  };
};

export const getChords = (note) => {
  return {
    major: getMajorChord(note),
    minor: getMinorChord(note),
    majorWithMinorSeventh: getMajorWithMinorSeventh(note),
    minorWithMinorSeventh: getMinorWithMinorSeventh(note),
    majorWithMajorSeventh: getMajorWithMajorSeventh(note),
    diminishedTriad: getDiminishedTriad(note),
    diminishedSeventh: getDiminishedSeventh(note),
  };
};
