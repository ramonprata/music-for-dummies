import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Switch,
  RadioGroup,
  FormControl,
  Radio,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core/';
import { NeckSelect } from '../../stringInstrument/';

const Controls = (props) => {
  const {
    instrument,
    onSelectInstrument,
    selectedNeck,
    woodNecksDesign,
    onSelectNeck,
    showNotes,
    setShowNotes,
  } = props;
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
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="instrument"
            value={instrument}
            onChange={(event) => onSelectInstrument(event.target.value)}
          >
            <FormControlLabel value="guitar" control={<Radio color="primary" />} label="Guitar" />
            <FormControlLabel value="uke" control={<Radio color="primary" />} label="Ukulele" />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          label={<Typography color="primary">Show notes</Typography>}
          control={
            <Switch
              color="primary"
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
