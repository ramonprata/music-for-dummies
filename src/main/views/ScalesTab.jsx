import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  RadioGroup,
  FormControl,
  Radio,
  FormControlLabel,
  FormLabel,
  Box,
  Typography,
  Grid,
} from '@material-ui/core/';
import { CssGridContainer, CssGridItem } from '../../shared/components';
import { ascendingChromaticNotes, getMajorScale, getMinorScale, getScales } from '../../shared';
import { useState } from 'react';
import Scale from './Scale';

const ScalesTab = (props) => {
  const [selectedNote, setSelectedNote] = useState(ascendingChromaticNotes[0]);
  const {} = props;
  const classes = useStyles(props)();
  const { scaleContainer, label } = classes;

  const handleChange = (e) => {
    setSelectedNote(e.target.value);
  };

  const { chromatic, major, minor } = getScales(selectedNote);

  return (
    <CssGridContainer
      repeatCol={false}
      alignContent="start"
      className={scaleContainer}
      rowGap="16px"
    >
      <CssGridItem align="start">
        <Box marginBottom={1}>
          <Typography color="primary" className={label}>
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
      <CssGridItem justify="start">
        <CssGridContainer repeatCol={true} templateCol="auto" gap="8px">
          <Scale notes={chromatic} scaleName="Chromatic Scale" />
          <Scale notes={major} scaleName="Major Scale" />
          <Scale notes={minor} scaleName="Minor Scale" />
        </CssGridContainer>
      </CssGridItem>
    </CssGridContainer>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      scaleContainer: {
        // backgroundColor: 'violet',
        padding: 16,
      },
      label: {
        textAlign: 'left',
      },
    })
  );

export default ScalesTab;
