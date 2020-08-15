import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import {
  woodNecksDesign,
  getAscendingChromaticScale,
  getMajorScale,
  getMinorScale,
} from '../../shared';
import Controls from '../../main/views/Controls';
import Neck from '../../stringInstrument/views/Neck';
import { NECK_WIDTH, NUMBER_OF_LINES, ROOMS } from '../../shared/';
import GridNotes from '../../gridNotes/views/GridNotes';
import GridNotesLine from '../../gridNotes/views/GridNotesLine';
import { tabs } from '../mainUtils';
import CustomTabs from '../../shared/components/CustomTabs';

const MainPage = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [selectedNeck, setSelectedNeck] = useState('wood');
  const classes = useStyles()();
  const { pageContainer, containerBox, gridNotesContainer, controlsContainer } = classes;
  const [instrument, setInstrument] = useState('guitar');

  const onSelectInstrument = (value) => {
    setInstrument(value);
  };

  const mapTabs = () => {
    return tabs.map((tab) => {
      switch (tab.id) {
        case 0:
          return {
            ...tab,
            renderTab: () => (
              <Controls
                instrument={instrument}
                onSelectInstrument={setInstrument}
                selectedNeck={selectedNeck}
                woodNecksDesign={woodNecksDesign}
                onSelectNeck={setSelectedNeck}
                showNotes={showNotes}
                setShowNotes={setShowNotes}
              />
            ),
          };

        default:
          return {
            ...tab,
            renderTab: () => <Typography>{tab.label}</Typography>,
          };
      }
    });
  };

  return (
    <Paper square className={pageContainer}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        direction="column"
        className={containerBox}
      >
        <Grid item>
          <Paper className={controlsContainer}>
            <CustomTabs tabs={mapTabs()} />
          </Paper>
        </Grid>

        <Grid
          container
          item
          direction="column"
          justify="space-between"
          className={gridNotesContainer}
        >
          <GridNotes
            numberOfLines={NUMBER_OF_LINES}
            renderLines={() =>
              Array(NUMBER_OF_LINES)
                .fill(true)
                .map((_, idx) => (
                  <GridNotesLine key={`grid-note-line-${idx}`} numberOfCols={ROOMS} />
                ))
            }
          />
          <Neck selectedNeck={selectedNeck} />
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      pageContainer: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      containerBox: {
        height: '100%',
      },
      controlsContainer: {
        width: NECK_WIDTH,
        marginBottom: 8,
      },
      gridNotesContainer: {
        width: NECK_WIDTH,
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
      },
    })
  );

export default MainPage;
