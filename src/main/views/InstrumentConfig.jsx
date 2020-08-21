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
import { CssGridContainer, CssGridItem } from '../../shared/components';

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
    <CssGridContainer
      repeatCol={false}
      alignContent="start"
      className={contolsContainer}
      rowGap="24px"
    >
      <CssGridItem justify="start">
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
      </CssGridItem>
      {/* <CssGridItem justify="start">
        <FormControlLabel
          label={<Typography color="primary">Show notes</Typography>}
          control={
            <Switch color="primary" checked={showNotesOnInstrument} onChange={onToggleShowNote} />
          }
        />
      </CssGridItem> */}
      <CssGridItem justify="start">
        <NeckSelect
          selectedNeck={selectedNeck}
          onSelectNeck={onSelectNeck}
          woodNecksDesign={woodNecksDesign}
        />
      </CssGridItem>
    </CssGridContainer>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      contolsContainer: {
        padding: 16,
      },
    })
  );

export default InstrumentConfig;
