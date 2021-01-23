import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { Neck, NeckNut } from '../../neck';
import { NECK_WIDTH } from '../../shared/';
import PanelConfig from '../../panel/views/PanelConfig';
import GridNotesContainer from '../../gridNotes/views/GridNotesContainer';
import CssGridContainer from '../../shared/components/CssGridContainer';
import CssGridItem from '../../shared/components/CssGridItem';
import { useContextStore, useWidthResize } from '../../shared/hooks';

const MainPage = () => {
  const { selectedTab } = useContextStore();
  const { isMobile } = useWidthResize(758);
  const classes = useStyles(isMobile);
  const { pageContainer, neckContainer, instrumentContainer } = classes;
  const instrumentTabSelected = selectedTab === 0;
  return (
    <Paper square>
      <div className={pageContainer}>
        <div className={classes.panelContainer}>
          <PanelConfig />
        </div>

        <CssGridContainer
          alignContent="center"
          templateCol="34px auto"
          className={instrumentContainer}
        >
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
      backgroundColor: theme.palette.primary.dark,
      display: 'grid',
      gridAutoColumns: '1fr',
      gridTemplateRows: '65vh 35vh',
      overflowX: 'auto',
      justifyItems: 'center',
      position: 'relative',
    },
    panelContainer: (isMobile) => ({
      width: isMobile ? '90%' : '65%',
    }),
    neckContainer: {
      width: NECK_WIDTH,
    },
    instrumentContainer: {
      marginBottom: 16,
    },
  };
});

export default MainPage;
