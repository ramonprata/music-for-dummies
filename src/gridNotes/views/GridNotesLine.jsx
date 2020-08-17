import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT } from '../../shared';
import Note from './Note';
import { useContextStore } from '../../shared/hooks/useContextStore';

const GridNotesLine = (props) => {
  const { showNotesOnInstrument } = useContextStore();
  const { numberOfCols } = props;
  const classes = useStyles(props)();
  const { lineContainer } = classes;

  return (
    <Grid container direction="row" className={lineContainer} wrap="nowrap">
      {Array(numberOfCols)
        .fill(true)
        .map((_, idx) => (
          <GridNotesCol key={`grid-note-col-${idx}`} index={idx}>
            {showNotesOnInstrument && <Note />}
          </GridNotesCol>
        ))}
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

export default React.memo(GridNotesLine, (prevProps, nextProps) => {
  return prevProps.showNotesOnInstrument === nextProps.showNotesOnInstrument;
});
