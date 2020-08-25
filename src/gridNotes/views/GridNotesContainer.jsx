import React from 'react';
import { useContextStore } from '../../shared/hooks/useContextStore';
import GridNotes from './GridNotes';
import GridNotesLine from './GridNotesLine';
import { getStringNotes, getInstrumentStrings } from '../../shared';

const GridNotesContainer = () => {
  const { instrument } = useContextStore();
  const instrumentStrings = getInstrumentStrings(instrument);
  const mapLines = instrumentStrings.map((firstNoteString, idx) => {
    const notes = getStringNotes(firstNoteString);
    return <GridNotesLine key={`grid-note-line-${idx}`} stringNotes={notes} />;
  });

  return <GridNotes lines={mapLines} />;
};

export default GridNotesContainer;
