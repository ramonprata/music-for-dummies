import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Box,
  Typography,
} from '@material-ui/core/';
import { CssGridContainer, CssGridItem } from '../../shared/components';
import { ascendingChromaticNotes, getScales } from '../../shared';
import { useState } from 'react';
import Scale from './Scale';

const ScalesTab = (props) => {
  const [selectedNote, setSelectedNote] = useState(ascendingChromaticNotes[0]);
  const {} = props;
  const classes = useStyles(props)();
  const { scaleContainer } = classes;

  const handleChange = (e) => {
    setSelectedNote(e.target.value);
  };

  const { chromatic, major, minor } = getScales(selectedNote);

  return (
    <CssGridContainer
      repeatCol={false}
      alignContent="start"
      className={scaleContainer}
      rowGap={16}
      justifyContent="center"
    >
      <CssGridItem align="start">
        <Box marginBottom={1}>
          <Typography align="left" color="primary">
            Choose a key note
          </Typography>
        </Box>
        <RadioGroup
          row
          aria-label="gender"
          name="gender1"
          value={selectedNote}
          onChange={handleChange}
        >
          {ascendingChromaticNotes.map((note) => (
            <FormControlLabel
              value={note}
              control={<Radio color="primary" />}
              label={<Typography color="primary">{note}</Typography>}
            />
          ))}
        </RadioGroup>
      </CssGridItem>

      <CssGridContainer
        alignItems="center"
        // templateCol="0.5fr 0.5fr"
        templateCol="0.5fr"
        templateRow={52}
        repeatRow={true}
        repeatCol={false}
        gap={16}
        style={{ height: 220, overflowY: 'auto' }}
      >
        <Scale notes={chromatic} scaleName="Chromatic Scale" />
        <Scale notes={major} scaleName="Major Scale" />
        <Scale notes={minor} scaleName="Minor Scale" />
      </CssGridContainer>
    </CssGridContainer>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      scaleContainer: {
        padding: 16,
      },
    })
  );

export default ScalesTab;
