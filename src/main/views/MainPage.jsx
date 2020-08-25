import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Neck, NeckNut } from '../../neck';
import { NECK_WIDTH, getInstrumentStrings } from '../../shared/';
import PanelConfig from '../../panel/views/PanelConfig';
import GridNotesContainer from '../../gridNotes/views/GridNotesContainer';
import CssGridContainer from '../../shared/components/CssGridContainer';
import CssGridItem from '../../shared/components/CssGridItem';
import { useContextStore } from '../../shared/hooks/useContextStore';

const MainPage = () => {
  const classes = useStyles()();
  const { pageContainer, neckContainer } = classes;
  const { selectedInstrument } = useContextStore();
  return (
    <Paper square className={pageContainer}>
      <CssGridContainer repeatCol={false} templateRow={`1fr 238px`}>
        <CssGridItem justify="center" className={neckContainer}>
          <PanelConfig />
        </CssGridItem>
        <CssGridItem justify="center">
          <CssGridContainer alignContent="center" templateCol="40px auto">
            <CssGridItem justify="center">
              <NeckNut selectedInstrument={selectedInstrument} />
            </CssGridItem>
            <CssGridItem justify="center" className={neckContainer}>
              <GridNotesContainer />
              <Neck />
            </CssGridItem>
          </CssGridContainer>
        </CssGridItem>
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
        overflow: 'hidden',
      },
      neckContainer: {
        width: NECK_WIDTH,
      },
    })
  );

export default MainPage;
