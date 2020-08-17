import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT } from '../../shared';
import Note from './Note';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { useMemo } from 'react';

const GridNotesLine = (props) => {
  const { showNotesOnInstrument } = useContextStore();
  const { numberOfCols } = props;
  const classes = useStyles(props)();
  const { lineContainer } = classes;
  const colsMemo = useMemo(() => {
    return Array(numberOfCols)
      .fill(0)
      .map((_, idx) => (
        <GridNotesCol key={`grid-note-col-${idx}`} index={idx}>
          <Note showNotesOnInstrument={showNotesOnInstrument} />
        </GridNotesCol>
      ));
  }, [showNotesOnInstrument]);
  return (
    <Grid container direction="row" className={lineContainer} wrap="nowrap">
      {colsMemo}
    </Grid>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      lineContainer: {
        height: GRID_NOTE_LINE_HEIGHT,
      },
    })
  );

export default GridNotesLine;
