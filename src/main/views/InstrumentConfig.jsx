import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Typography,
  RadioGroup,
  FormControl,
  Radio,
  FormControlLabel,
  Box,
} from '@material-ui/core/';
import NeckSelect from './NeckSelect';
import { selectInstrument } from '../../panel/store';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { CssGridContainer, CssGridItem } from '../../shared/components';

const InstrumentConfig = (props) => {
  const { selectedInstrument, dispatch } = useContextStore();
  const { selectedNeck, woodNecksDesign, onSelectNeck } = props;
  const classes = useStyles(props)();
  const { contolsContainer } = classes;

  const onSelectInstrument = (event) => {
    selectInstrument(dispatch, event.target.value);
  };

  // const onToggleShowNote = () => {
  //   toggleShowNotes(dispatch);
  // };

  return (
    <CssGridContainer
      repeatCol={false}
      alignContent="start"
      className={contolsContainer}
      rowGap={48}
    >
      <CssGridItem justify="start">
        <Box marginBottom={1}>
          <Typography align="left" color="primary">
            Choose your instrument
          </Typography>
        </Box>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="instrument"
            name="instrument"
            value={selectedInstrument}
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

export default React.memo(InstrumentConfig, (p, n) => {
  const sameNeck = p.selectedNeck === n.selectedNeck;
  const sameWood = p.woodNecksDesign === n.woodNecksDesign;
  return sameNeck && sameWood;
});
