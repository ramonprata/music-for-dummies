import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { GRID_NOTE_LINE_HEIGHT, getInstrumentStrings } from '../../shared';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getStringsColor } from '../../shared/stringColors';

const NeckStrings = () => {
  const { selectedInstrument, selectedStringsColor } = useContextStore();
  const instrumentStrings = getInstrumentStrings(selectedInstrument);
  const stringsColorConfig = getStringsColor(selectedStringsColor);
  const classes = useStyles(stringsColorConfig)();
  const { string } = classes;
  return instrumentStrings
    .map((cord, idx) => {
      return (
        <Grid
          container
          justify="flex-end"
          style={{ height: GRID_NOTE_LINE_HEIGHT }}
          key={`${cord}-${idx}`}
        >
          <div className={string} />
        </Grid>
      );
    })
    .reverse();
};

const useStyles = (stringsColorConfig) =>
  makeStyles(() =>
    createStyles({
      string: {
        margin: '20px 0',
        height: '1.5px',
        width: `calc(100% - 0px)`,
        boxShadow: '0 6px 6px 1px black',
        ...stringsColorConfig,
      },
    })
  );

export default NeckStrings;
