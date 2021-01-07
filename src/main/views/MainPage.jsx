import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { Neck, NeckNut } from '../../neck';
import { NECK_WIDTH } from '../../shared/';
import PanelConfig from '../../panel/views/PanelConfig';
import GridNotesContainer from '../../gridNotes/views/GridNotesContainer';
import CssGridContainer from '../../shared/components/CssGridContainer';
import CssGridItem from '../../shared/components/CssGridItem';
import { useContextStore } from '../../shared/hooks';

const MainPage = () => {
  const classes = useStyles();
  const { selectedTab } = useContextStore();

  const { pageContainer, neckContainer } = classes;
  const instrumentTabSelected = selectedTab === 0;
  return (
    <Paper square>
      <div className={pageContainer}>
        <div className={classes.panelContainer}>
          <PanelConfig />
        </div>

        <CssGridContainer alignContent="center" templateCol="34px auto">
          <CssGridItem justify="center">
            <NeckNut />
          </CssGridItem>
          <CssGridItem justify="center" className={neckContainer}>
            {!instrumentTabSelected && <GridNotesContainer />}
            <Neck />
          </CssGridItem>
        </CssGridContainer>
      </div>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    pageContainer: {
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: theme.palette.primary.dark,
      overflowX: 'auto',
      display: 'grid',
      gridTemplateRows: '65vh 35vh',
      justifyItems: 'center',
      // gap: 16,
    },
    panelContainer: {
      width: '65%',
      position: 'relative',
    },
    neckContainer: {
      width: NECK_WIDTH,
    },
  };
});

export default MainPage;
