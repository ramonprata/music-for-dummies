import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { NeckSelect } from '../../stringInstrument/';
import { FormControlLabel, Typography, Switch } from '@material-ui/core';

const Controls = (props) => {
  const { selectedNeck, woodNecksDesign, onSelectNeck, showNotes, setShowNotes } = props;
  const classes = useStyles(props)();
  const { title, contolsContainer } = classes;

  return (
    <Grid container direction="column" className={contolsContainer} justify="space-between">
      <NeckSelect
        selectedNeck={selectedNeck}
        onSelectNeck={onSelectNeck}
        woodNecksDesign={woodNecksDesign}
      />
      <Grid container direction="row" justify="flex-end">
        <FormControlLabel
          label={<Typography className={title}>Show notes</Typography>}
          control={
            <Switch
              color="default"
              checked={showNotes}
              onChange={() => setShowNotes((showNotes) => !showNotes)}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      contolsContainer: {
        minHeight: 200,
        padding: '16px 0',
      },
      title: {
        color: '#fff',
      },
    })
  );

export default Controls;
