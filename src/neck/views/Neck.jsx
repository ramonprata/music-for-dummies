import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { NECK_WIDTH, FRETS_BOARD, GRID_NOTE_LINE_HEIGHT, getInstrumentStrings } from '../../shared';
import { getNeckDesign } from '../necktUtils';
import GridNotesCol from '../../gridNotes/views/GridNotesCol';
import NeckMarker from './NeckMarker';
import NeckStrings from './NeckStrings';
import { useContextStore } from '../../shared/hooks';
import { useMemo } from 'react';

const Neck = () => {
  const { selectedNeckModel, selectedInstrument } = useContextStore();
  const neckDesignApply = useMemo(() => getNeckDesign(selectedNeckModel), [selectedNeckModel]);
  const instrumentStrings = useMemo(() => getInstrumentStrings(selectedInstrument), [
    selectedInstrument,
  ]);
  const classes = useStyles(instrumentStrings.length);

  const { neckContainer, containerFrets, containerStrings, fret } = classes;

  const mappedFrets = useMemo(() => {
    const renderFret = (idx = 0) => (
      <React.Fragment>
        <div className={idx === 0 ? '' : fret} />
      </React.Fragment>
    );
    return Array(FRETS_BOARD + 1)
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
      });
  }, [neckDesignApply, selectedInstrument, fret]);
  return (
    <Grid container className={neckContainer}>
      <Grid container direction="row" wrap="nowrap" justify="center" className={containerFrets}>
        {mappedFrets}
      </Grid>
      <Grid container direction="column" className={containerStrings}>
        <NeckStrings />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  neckContainer: (numberOfStrings) => ({
    height: numberOfStrings * GRID_NOTE_LINE_HEIGHT,
    position: 'relative',
  }),

  containerFrets: (numberOfStrings) => ({
    zIndex: 0,
    height: numberOfStrings * GRID_NOTE_LINE_HEIGHT,
  }),

  containerStrings: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    width: NECK_WIDTH,
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
});

export default React.memo(Neck, () => true);
