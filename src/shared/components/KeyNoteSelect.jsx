import React from 'react';
import { Box, RadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import CssGridItem from './CssGridItem';
import CssGridContainer from './CssGridContainer';
import { ascendingChromaticNotes } from '../defaultValues';

const KeyNoteSelect = (props) => {
  const { onSelectNote, selectedNote } = props;

  return (
    <CssGridItem align="start">
      <Box marginBottom={1}>
        <CssGridContainer>
          <CssGridItem>
            <Typography align="left" color="primary">
              Choose a key note
            </Typography>
          </CssGridItem>
        </CssGridContainer>
      </Box>

      <RadioGroup
        row
        aria-label="gender"
        name="gender1"
        value={selectedNote}
        onChange={onSelectNote}
      >
        {ascendingChromaticNotes.map((note, idx) => (
          <FormControlLabel
            key={`${note}-${idx}`}
            value={note}
            control={<Radio color="primary" />}
            label={<Typography color="primary">{note}</Typography>}
          />
        ))}
      </RadioGroup>
    </CssGridItem>
  );
};

export default KeyNoteSelect;
