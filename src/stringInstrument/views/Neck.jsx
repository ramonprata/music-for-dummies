import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { NECK_WIDTH, ROOMS, GRID_NOTE_LINE_HEIGHT } from '../../shared/';
import { getNeckDesign } from '../stringInstrumentUtils';
import GridNotesCol from '../../gridNotes/views/GridNotesCol';
import NeckMarker from './NeckMarker';
import NeckStrings from './NeckStrings';
import { useContextStore } from '../../shared/hooks/useContextStore';

const Neck = () => {
  const { instrumentStrings, selectedNeckModel } = useContextStore();
  const neckDesignApply = getNeckDesign(selectedNeckModel);
  const classes = useStyles(neckDesignApply, instrumentStrings.length, GRID_NOTE_LINE_HEIGHT)();
  const { neckContainer, containerFrets, containerStrings } = classes;
  return (
    <Grid container className={neckContainer}>
      <Grid container direction="row" wrap="nowrap" className={containerFrets}>
        {Array(ROOMS)
          .fill(true)
          .map((_, idx) => (
            <GridNotesCol index={idx} showFrets={true} key={`marker-${idx}`}>
              <NeckMarker room={idx + 1} />
            </GridNotesCol>
          ))}
      </Grid>
      <Grid container direction="column" className={containerStrings}>
        <NeckStrings />
      </Grid>
    </Grid>
  );
};

const useStyles = (neckDesignApply, numberOfStrings, gridHeight) =>
  makeStyles(() =>
    createStyles({
      containerFrets: {
        zIndex: 0,
        position: 'absolute',
        height: numberOfStrings * gridHeight,
        width: NECK_WIDTH,
      },
      containerStrings: {
        zIndex: 1,
        position: 'absolute',
        width: NECK_WIDTH,
      },
      neckContainer: {
        height: numberOfStrings * gridHeight,
        backgroundImage: `url(${neckDesignApply})`,
      },
    })
  );

export default React.memo(Neck);
