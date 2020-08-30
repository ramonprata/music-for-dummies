import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { NECK_WIDTH, getInstrumentStrings, getStringNotes } from '../../shared';
import GridNotesLine from './GridNotesLine';

const GridNotes = (props) => {
  const { selectedInstrument } = props;
  const classes = useStyles(props)();
  const { gridContainer } = classes;

  const mappedStringNotes = useMemo(() => {
    const instrumentStrings = getInstrumentStrings(selectedInstrument);
    return instrumentStrings.map((firstNoteString, idx) => {
      const notes = getStringNotes(firstNoteString);
      return <GridNotesLine key={`grid-note-line-${idx}`} stringNotes={notes} idx={idx} />;
    });
  }, [selectedInstrument]);

  return (
    <Grid container direction="row" className={gridContainer}>
      {mappedStringNotes}
    </Grid>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      gridContainer: {
        width: NECK_WIDTH,
        zIndex: 3,
        position: 'absolute',
      },
    })
  );

export default GridNotes;
// export default React.memo(GridNotes, (p, n) => {
//   const sameInstrument = p.selectedInstrument === n.selectedInstrument;
//   console.log('sameInstrument :>> ', sameInstrument);
//   return sameInstrument;
// });
