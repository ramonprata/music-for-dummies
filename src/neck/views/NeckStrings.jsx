import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { GRID_NOTE_LINE_HEIGHT, getInstrumentStrings, isGuitarSelected } from '../../shared';
import { useContextStore } from '../../shared/hooks/useContextStore';

const NeckStrings = () => {
  const classes = useStyles()();
  const { string } = classes;
  const { selectedInstrument } = useContextStore();
  const instrumentStrings = getInstrumentStrings(selectedInstrument);

  return instrumentStrings
    .map((cord, idx) => {
      const isGuitar = isGuitarSelected(selectedInstrument);
      const dynamicStringThickness = isGuitar ? 0.8 + (idx * 1.2) / 5 : 1.2;
      return (
        <Grid
          container
          justify="flex-end"
          style={{ height: GRID_NOTE_LINE_HEIGHT }}
          key={`${cord}-${idx}`}
        >
          <div className={string} style={{ height: dynamicStringThickness }} />
        </Grid>
      );
    })
    .reverse();
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      string: {
        margin: '20px 0',
        backgroundColor: '#5b6467',
        width: `calc(100% - 3px)`,
        boxShadow: '0 6px 6px 1px black',
      },
    })
  );

export default NeckStrings;
