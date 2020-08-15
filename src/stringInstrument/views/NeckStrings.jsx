import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { GRID_NOTE_LINE_HEIGHT, STRINGS_APPLY } from '../../shared';

const NeckStrings = () => {
  const classes = useStyles()();
  const { string } = classes;

  return STRINGS_APPLY.map((cord, idx) => (
    <Grid container style={{ height: GRID_NOTE_LINE_HEIGHT }} key={`${cord}-${idx}`}>
      <div className={string} />
    </Grid>
  ));
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      string: {
        height: 1,
        margin: '20px 0',
        backgroundColor: '#5b6467',
        width: '100%',
        backgroundImage: `linear-gradient(315deg, #5b6467 0%, #8b939a 74%)`,
      },
    })
  );

export default NeckStrings;
