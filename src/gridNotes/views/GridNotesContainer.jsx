import React from 'react';
import { useContextStore } from '../../shared/hooks/useContextStore';
import GridNotes from './GridNotes';
import GridNotesLine from './GridNotesLine';
import { ROOMS } from '../../shared';

const GridNotesContainer = () => {
  const { instrumentStrings } = useContextStore();

  const mapLines = instrumentStrings.map((_, idx) => (
    <GridNotesLine key={`grid-note-line-${idx}`} numberOfCols={ROOMS} />
  ));

  return <GridNotes lines={mapLines} />;
};

export default GridNotesContainer;
