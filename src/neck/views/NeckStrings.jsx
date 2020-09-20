import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { GRID_NOTE_LINE_HEIGHT, getInstrumentStrings, isGuitarSelected } from '../../shared';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getStringsColor } from '../../shared/stringColors';

const NeckStrings = () => {
  const { selectedInstrument, selectedStringsColor } = useContextStore();
  const instrumentStrings = getInstrumentStrings(selectedInstrument);
  const stringsColorConfig = getStringsColor(selectedStringsColor);
  const classes = useStyles(stringsColorConfig)();
  const isGuitar = isGuitarSelected(selectedInstrument);
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
          <div
            className={string}
            style={{
              height: !isGuitar ? 2 : 5 - (instrumentStrings.length - idx),
              minHeight: '1.8px',
            }}
          />
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
        width: `calc(100% - 0px)`,
        boxShadow: '0 6px 6px 1px black',
        background: `linear-gradient(to top,  ${stringsColorConfig.backgroundColor} 0%,rgba(199,199,199,1) 80%, ${stringsColorConfig.backgroundColor} 100%)`,
      },
    })
  );

export default NeckStrings;
