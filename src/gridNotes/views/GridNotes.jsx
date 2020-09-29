import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { NECK_WIDTH, getInstrumentStrings, getStringNotes } from '../../shared';
import GridNotesLine from './GridNotesLine';
import { useNotesRender } from '../../shared/hooks';
import { useMemo } from 'react';

const GridNotes = (props) => {
  const { selectedInstrument } = props;
  const useStyles = useMemo(() => getStyles(), []);
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
    <Grid container direction="row" className={gridContainer}>
      {mappedStringNotes()}
    </Grid>
  );
};

const getStyles = () =>
  makeStyles(() =>
    createStyles({
      gridContainer: {
        width: NECK_WIDTH,
        zIndex: 3,
        position: 'absolute',
      },
    })
  );

export default React.memo(GridNotes, (p, n) => p.selectedInstrument === n.selectedInstrument);
