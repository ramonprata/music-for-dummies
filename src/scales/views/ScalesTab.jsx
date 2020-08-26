import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { RadioGroup, Radio, FormControlLabel, Box, Typography } from '@material-ui/core/';
import { CssGridContainer, CssGridItem } from '../../shared/components';
import { ascendingChromaticNotes, getScales } from '../../shared';
import Scale from './Scale';
import { setSelectedScale } from '../store';
import { useContextStore } from '../../shared/hooks';
import { setSelectedNote } from '../store';

const ScalesTab = (props) => {
  const classes = useStyles(props)();
  const { scaleContainer } = classes;
  const { selectedNote, dispatch } = useContextStore();

  const handleChange = (e) => {
    setSelectedNote(dispatch, e.target.value);
  };

  const {
    chromatic,
    major,
    minor,
    majorPentatonic,
    minorPentatonic,
    majorPentatonicBlues,
  } = getScales(selectedNote);

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
        templateCol="0.5fr 0.5fr"
        // templateCol="0.5fr"
        templateRow={52}
        repeatRow={true}
        repeatCol={false}
        gap={16}
        style={{ height: 225, overflowY: 'auto' }}
      >
        <Scale
          scaleKey="chromatic"
          scaleLabel="Chromatic"
          scaleOption={chromatic()}
          onSelectScale={() => setSelectedScale(dispatch, 'chromatic')}
        />
        <Scale
          scaleKey="major"
          scaleLabel="Major"
          scaleOption={major()}
          onSelectScale={() => setSelectedScale(dispatch, 'major')}
        />
        <Scale
          scaleKey="minor"
          scaleLabel="Minor"
          scaleOption={minor()}
          onSelectScale={() => setSelectedScale(dispatch, 'minor')}
        />
        <Scale
          scaleKey="majorPentatonic"
          scaleLabel="Major Pentatonic"
          scaleOption={majorPentatonic()}
          onSelectScale={() => setSelectedScale(dispatch, 'majorPentatonic')}
        />
        <Scale
          scaleKey="minorPentatonic"
          scaleLabel="Minor Pentatonic"
          scaleOption={minorPentatonic()}
          onSelectScale={() => setSelectedScale(dispatch, 'minorPentatonic')}
        />
        <Scale
          scaleKey="majorPentatonicBlues"
          scaleLabel="Blues scale(minor)"
          scaleOption={majorPentatonicBlues()}
          onSelectScale={() => setSelectedScale(dispatch, 'majorPentatonicBlues')}
        />
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
