import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Neck from '../../stringInstrument/views/Neck';
import { NECK_WIDTH, ROOMS } from '../../shared/';
import GridNotes from '../../gridNotes/views/GridNotes';
import GridNotesLine from '../../gridNotes/views/GridNotesLine';
import { useContextStore } from '../../shared/hooks/useContextStore';
import PanelConfig from './PanelConfig';
import GridNotesContainer from '../../gridNotes/views/GridNotesContainer';

const MainPage = () => {
  const classes = useStyles()();
  const { pageContainer, containerBox, gridNotesContainer, controlsContainer } = classes;

  return (
    <Paper square className={pageContainer}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        direction="column"
        className={containerBox}
      >
        <Grid item container direction="column" justify="flex-end" className={controlsContainer}>
          <PanelConfig />
        </Grid>

        <Grid container item direction="column" justify="center" className={gridNotesContainer}>
          <GridNotesContainer />
          <Neck />
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = () =>
  makeStyles((theme) =>
    createStyles({
      pageContainer: {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: theme.palette.primary.dark,
      },
      containerBox: {
        height: window.innerHeight,
      },
      controlsContainer: {
        width: NECK_WIDTH,
        height: '60vh',
      },
      gridNotesContainer: {
        width: NECK_WIDTH,
        height: '40vh',
        overflowX: 'scroll',
        overflowY: 'hidden',
      },
    })
  );

export default MainPage;
