import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT } from '../../shared';
import Note from './Note';

const GridNotesLine = (props) => {
  const { numberOfCols } = props;
  const classes = useStyles(props)();
  const { lineContainer } = classes;

  return (
    <Grid container direction="row" className={lineContainer} wrap="nowrap">
      {Array(numberOfCols)
        .fill(true)
        .map((_, idx) => (
          <GridNotesCol key={`grid-note-col-${idx}`} index={idx}>
            <Note />
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

export default GridNotesLine;
