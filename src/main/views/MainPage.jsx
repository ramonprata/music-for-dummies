import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import {
  woodNecksDesign,
  getAscendingChromaticScale,
  getMajorScale,
  getMinorScale,
} from '../../shared';
import Tablature from './Tablature';
import Controls from '../../main/views/Controls';
import Neck from '../../stringInstrument/views/Neck';
import { NECK_HEIGHT, NECK_WIDTH } from '../../shared/utils';

// getAscendingChromaticScale('C', 12);
// getMajorScale('A', 7);
// getMinorScale('A', 7);

const MainPage = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [selectedNeck, setSelectedNeck] = useState('wood');
  const classes = useStyles()();
  const { neckContainer, pageContainer, containerBox, title } = classes;
  return (
    <Paper square className={pageContainer}>
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        direction="column"
        className={containerBox}
      >
        <Typography variant="h3" color="inherit" className={title}>
          music for dummies
        </Typography>
        <Controls
          selectedNeck={selectedNeck}
          woodNecksDesign={woodNecksDesign}
          onSelectNeck={setSelectedNeck}
          showNotes={showNotes}
          setShowNotes={setShowNotes}
        />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={neckContainer}
        >
          <Tablature
            showNotes={showNotes}
            numberOfStrings={4}
            NECK_HEIGHT={NECK_HEIGHT}
            NECK_WIDTH={NECK_WIDTH}
          />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={neckContainer}
          >
            <Neck selectedNeck={selectedNeck} />
          </Grid>
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
        overflow: 'auto',
        backgroundColor: '#923cb5',
        backgroundImage: `linear-gradient(180deg, #923cb5 25%, #111 100%)`,
      },
      containerBox: {
        padding: `0 5%`,
        height: '100%',
      },
      neckContainer: {
        height: NECK_HEIGHT,
        width: NECK_WIDTH,
      },
      title: {
        color: theme.palette.common.white,
      },
    })
  );

export default MainPage;
