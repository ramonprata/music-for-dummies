import { getChords } from '../chords';
import { getScales } from '../scales';
import { getNextAvailableColor, mapNotesColors } from '../utils';
import { useContextStore } from './useContextStore';

export const useNotesRender = () => {
  const { scaleName, selectedNote, selectedTab, selectedChord } = useContextStore();
  const isChordTabSelected = selectedTab === 2;
  if (isChordTabSelected) {
    const mountedChord = getChords(selectedNote)[selectedChord]();
    return mapNotesColors(mountedChord.chordNotes);
  } else {
    const scaleRender = scaleName && getScales(selectedNote)[scaleName]();
    return scaleRender && mapNotesColors(scaleRender.scale, true);
  }
};
