import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  RadioGroup,
  FormControl,
  Radio,
  FormControlLabel,
  Box,
} from '@material-ui/core/';
import NeckSelect from '../../main/views/NeckSelect';
import { selectInstrument } from '../store';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { CssGridContainer, CssGridItem } from '../../shared/components';
import StringsColorSelect from './StringsColorSelect';

const InstrumentConfig = (props) => {
  const { selectedInstrument, dispatch } = useContextStore();
  const { selectedNeck, woodNecksDesign, onSelectNeck } = props;
  const classes = useStyles();
  const { contolsContainer } = classes;

  const onSelectInstrument = (event) => {
    selectInstrument(dispatch, event.target.value);
  };

  return (
    <CssGridContainer
      repeatCol={false}
      alignContent="start"
      className={contolsContainer}
      rowGap={24}
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
      <CssGridItem justify="start">
        <NeckSelect
          selectedNeck={selectedNeck}
          onSelectNeck={onSelectNeck}
          woodNecksDesign={woodNecksDesign}
        />
      </CssGridItem>
      <CssGridItem justify="start">
        <StringsColorSelect />
      </CssGridItem>
    </CssGridContainer>
  );
};

const useStyles = makeStyles({
  contolsContainer: {
    padding: 16,
  },
});

export default React.memo(InstrumentConfig, (p, n) => {
  const sameNeck = p.selectedNeck === n.selectedNeck;
  const sameWood = p.woodNecksDesign === n.woodNecksDesign;
  return sameNeck && sameWood;
});
