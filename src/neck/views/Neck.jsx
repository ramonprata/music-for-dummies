import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { NECK_WIDTH, FRETS_BOARD, GRID_NOTE_LINE_HEIGHT, getInstrumentStrings } from '../../shared';
import { getNeckDesign } from '../necktUtils';
import GridNotesCol from '../../gridNotes/views/GridNotesCol';
import NeckMarker from './NeckMarker';
import NeckStrings from './NeckStrings';

const Neck = (props) => {
  const { selectedNeckModel, selectedInstrument } = props;
  const neckDesignApply = getNeckDesign(selectedNeckModel);
  const instrumentStrings = getInstrumentStrings(selectedInstrument);
  const classes = useStyles(neckDesignApply, instrumentStrings.length)();
  const { neckContainer, containerFrets, containerStrings } = classes;
  return (
    <Grid container className={neckContainer}>
      <Grid container direction="row" wrap="nowrap" justify="center" className={containerFrets}>
        {Array(FRETS_BOARD + 1)
          .fill(0)
          .map((_, idx) => {
            return (
              <GridNotesCol
                index={idx}
                showFrets={true}
                key={`marker-${idx}`}
                neckDesignApply={neckDesignApply}
              >
                <NeckMarker room={idx} />
              </GridNotesCol>
            );
          })}
      </Grid>
      <Grid container direction="column" className={containerStrings}>
        <NeckStrings />
      </Grid>
    </Grid>
  );
};

const useStyles = (neckDesignApply, numberOfStrings) =>
  makeStyles(() =>
    createStyles({
      containerFrets: {
        zIndex: 0,
        position: 'fixed',
        height: numberOfStrings * GRID_NOTE_LINE_HEIGHT,
        width: NECK_WIDTH,
      },
      containerStrings: {
        zIndex: 1,
        position: 'fixed',
        width: NECK_WIDTH,
      },
      neckContainer: {
        height: numberOfStrings * GRID_NOTE_LINE_HEIGHT,
      },
    })
  );

export default React.memo(Neck, (p, n) => {
  const sameNeckModel = p.selectedNeckModel === n.selectedNeckModel;
  const sameInstrument = p.selectedInstrument === n.selectedInstrument;
  return sameNeckModel && sameInstrument;
});
