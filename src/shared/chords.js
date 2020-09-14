const chordNotes = ['C', 'E', 'G'].map((note, idx) => ({
  note,
  colorNote: getNextAvailableColor(idx),
}));

export const getChordNote = (stringNote) => {
  const chordNote = chordNotes.find((chordNote) => stringNote === chordNote.note);
  return chordNote;
};
