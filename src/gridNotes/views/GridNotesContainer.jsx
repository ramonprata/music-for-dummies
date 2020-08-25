import React from 'react';
import { useContextStore } from '../../shared/hooks/useContextStore';
import GridNotes from './GridNotes';

const GridNotesContainer = () => {
  const { selectedInstrument } = useContextStore();

  return <GridNotes selectedInstrument={selectedInstrument} />;
};

export default GridNotesContainer;
