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
  const { neckContainer, containerFrets, containerStrings, fret } = classes;

  const renderFret = (idx = 0) => (
    <React.Fragment>
      <div
        // id="fret"
        className={idx === 0 ? '' : fret}
      />
    </React.Fragment>
  );

  return (
    <Grid container className={neckContainer}>
      <Grid container direction="row" wrap="nowrap" justify="center" className={containerFrets}>
        {Array(FRETS_BOARD + 1)
          .fill(0)
          .map((_, idx) => {
            return (
              <React.Fragment key={idx}>
                {renderFret(idx)}
                <GridNotesCol
                  index={idx}
                  showFrets={true}
                  key={`marker-${idx}`}
                  neckDesignApply={neckDesignApply}
                >
                  <NeckMarker room={idx} selectedInstrument={selectedInstrument} />
                </GridNotesCol>
              </React.Fragment>
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
      fret: {
        width: 6,
        backgroundColor: 'rgba(139, 141, 141, 1)',
        borderRadius: 2,
        zIndex: 4,
        '-webkit-box-shadow': '4px 0px 3px -1px #000, -4px 0px 3px -1px #000',
        '-moz-box-shadow': '4px 0px 3px -1px #000, -4px 0px 3px -1px #000',
        'box-shadow': '4px 0px 3px -1px #000, -4px 0px 3px -1px #000',
      },
    })
  );

export default React.memo(Neck, (p, n) => {
  const sameNeckModel = p.selectedNeckModel === n.selectedNeckModel;
  const sameInstrument = p.selectedInstrument === n.selectedInstrument;
  return sameNeckModel && sameInstrument;
});
