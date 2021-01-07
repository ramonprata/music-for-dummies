import { getChords } from '../chords';
import { getScales } from '../scales';
import { mapNotesColors } from '../utils';
import { useContextStore } from './useContextStore';

export const useNotesRender = () => {
  const { scaleName, selectedNote, selectedTab, selectedChord } = useContextStore();
  const isChordTabSelected = selectedTab === 2;
  const isScaleTabSelected = selectedTab === 1;
  if (isChordTabSelected) {
    const mountedChord = getChords(selectedNote)[selectedChord];
    return mapNotesColors(mountedChord.chordNotes);
  } else if (isScaleTabSelected) {
    const scaleRender = scaleName && getScales(selectedNote)[scaleName];
    return scaleRender && mapNotesColors(scaleRender.scale, true);
  }
  return [];
};
