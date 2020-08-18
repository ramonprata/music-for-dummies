import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Neck from '../../stringInstrument/views/Neck';
import { NECK_WIDTH } from '../../shared/';
import PanelConfig from './PanelConfig';
import GridNotesContainer from '../../gridNotes/views/GridNotesContainer';
import CssGridContainer from '../../shared/components/CssGridContainer';
import CssGridItem from '../../shared/components/CssGridItem';

const MainPage = () => {
  const classes = useStyles()();
  const { pageContainer, gridNotesContainer } = classes;

  return (
    <Paper square className={pageContainer}>
      <CssGridContainer justifyItems="center">
        <CssGridContainer templateRow="1fr minmax(234px, auto)" repeatCol={false} rowGap="8px">
          <PanelConfig />
          <CssGridItem className={gridNotesContainer} align="center">
            <GridNotesContainer />
            <Neck />
          </CssGridItem>
        </CssGridContainer>
      </CssGridContainer>
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
        margin: 0,
        overflow: 'hidden',
      },

      gridNotesContainer: {
        width: NECK_WIDTH,
      },
    })
  );

export default MainPage;
