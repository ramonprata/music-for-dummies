import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Switch,
  RadioGroup,
  FormControl,
  Radio,
  FormControlLabel,
} from '@material-ui/core/';
import NeckSelect from './NeckSelect';
import { toggleShowNotes, selectInstrument } from '../store';
import { useContextStore } from '../../shared/hooks/useContextStore';

const InstrumentConfig = (props) => {
  const { showNotesOnInstrument, instrument, dispatch } = useContextStore();
  const { selectedNeck, woodNecksDesign, onSelectNeck } = props;
  const classes = useStyles(props)();
  const { contolsContainer } = classes;

  const onSelectInstrument = (event) => {
    selectInstrument(dispatch, event.target.value);
  };

  const onToggleShowNote = () => {
    toggleShowNotes(dispatch);
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="flex-start"
      className={contolsContainer}
    >
      <Grid item>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="instrument"
            name="instrument"
            value={instrument}
            onChange={onSelectInstrument}
          >
            <FormControlLabel
              value="guitar"
              color="primary"
              control={<Radio color="primary" />}
              label={<Typography color="primary">Guitar</Typography>}
            />
            <FormControlLabel
              value="ukulele"
              control={<Radio color="primary" />}
              label={<Typography color="primary">Ukulele</Typography>}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControlLabel
          label={<Typography color="primary">Show notes</Typography>}
          control={
            <Switch color="primary" checked={showNotesOnInstrument} onChange={onToggleShowNote} />
          }
        />
      </Grid>
      <Grid item>
        <NeckSelect
          selectedNeck={selectedNeck}
          onSelectNeck={onSelectNeck}
          woodNecksDesign={woodNecksDesign}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      contolsContainer: {
        height: '100%',
        padding: 16,
      },
      title: {
        color: '#fff',
      },
    })
  );

export default InstrumentConfig;
