import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core/';
import { NECK_WIDTH, getInstrumentStrings, getStringNotes } from '../../shared';
import GridNotesLine from './GridNotesLine';
import { useNotesRender } from '../../shared/hooks';
import { useState } from 'react';

const GridNotes = (props) => {
  const gridNotesRef = useRef(null);

  const { selectedInstrument } = props;
  const classes = useStyles();

  const { gridContainer } = classes;
  const notesRender = useNotesRender();

  const mappedStringNotes = () => {
    const instrumentStrings = getInstrumentStrings(selectedInstrument);
    return instrumentStrings.map((firstNoteString, idx) => {
      const notes = getStringNotes(firstNoteString);
      return (
        <GridNotesLine
          key={`grid-note-line-${idx}`}
          stringNotes={notes}
          idx={idx}
          notesRender={notesRender}
        />
      );
    });
  };

  return (
    <Grid ref={gridNotesRef} container direction="row" className={gridContainer}>
      {mappedStringNotes()}
    </Grid>
  );
};

const useStyles = makeStyles({
  gridContainer: {
    width: NECK_WIDTH,
    zIndex: 3,
    position: 'absolute',
  },
});

export default GridNotes;
