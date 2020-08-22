import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Neck from '../../stringInstrument/views/Neck';
import { NECK_WIDTH, GRID_NOTE_LINE_HEIGHT, getMajorScale } from '../../shared/';
import PanelConfig from './PanelConfig';
import GridNotesContainer from '../../gridNotes/views/GridNotesContainer';
import CssGridContainer from '../../shared/components/CssGridContainer';
import CssGridItem from '../../shared/components/CssGridItem';
import Note from '../../gridNotes/views/Note';
import { useContextStore } from '../../shared/hooks/useContextStore';

const MainPage = () => {
  const classes = useStyles()();
  const { pageContainer, gridNotesContainer } = classes;
  const { instrumentStrings, instrument } = useContextStore();
  console.log('instrumentStrings :>> ', instrumentStrings);
  const numberOfCords = instrumentStrings.length;
  return (
    <Paper square className={pageContainer}>
      <CssGridContainer repeatCol={false} templateRow={`1fr 234px`}>
        <CssGridContainer justifyContent="center" templateCol="90%" repeatCol={false}>
          <CssGridContainer repeatCol={false} gap={8}>
            <PanelConfig />
          </CssGridContainer>
        </CssGridContainer>

        <CssGridContainer
          repeatCol={false}
          templateCol="5% 1fr"
          alignContent="center"
          justifyContent="space-between"
          // style={{ backgroundColor: 'orange' }}
        >
          <CssGridItem justify="end">
            <CssGridContainer alignItems="center" repeatCol={false}>
              {instrumentStrings.map((cord, idx) => (
                <Note
                  key={`${instrument}-${cord}-${idx}`}
                  showNotesOnInstrument={true}
                  stringNote={cord}
                />
              ))}
            </CssGridContainer>
          </CssGridItem>
          <CssGridItem justify="start" className={gridNotesContainer}>
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
        // backgroundColor: theme.palette.secondary.main,
      },

      gridNotesContainer: {
        width: NECK_WIDTH,
      },
    })
  );

export default MainPage;
