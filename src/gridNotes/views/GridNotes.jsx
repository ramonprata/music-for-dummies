import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { NECK_WIDTH, ROOMS } from '../../shared';
import GridNotesLine from './GridNotesLine';
import { useMemo } from 'react';

const GridNotes = (props) => {
  const { lines } = props;
  const classes = useStyles(props)();
  const { gridContainer } = classes;

  return (
    <Grid container direction="column" className={gridContainer}>
      {lines}
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
