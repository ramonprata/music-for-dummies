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
  const { scaleContainer, intrumentText } = classes;
  const { selectedNote, dispatch, selectedInstrument } = useContextStore();

  const handleChange = (e) => {
    setSelectedNote(dispatch, e.target.value);
  };

  const {
    chromatic,
    major,
    minor,
    majorPentatonic,
    minorPentatonic,
    majorPentaBlues,
    minorPentaBlues,
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
          <CssGridContainer>
            <CssGridItem>
              <Typography align="left" color="primary">
                Choose a key note
              </Typography>
            </CssGridItem>
            <CssGridItem justify="end">
              <Typography align="left" color="primary" className={intrumentText}>
                {selectedInstrument}
              </Typography>
            </CssGridItem>
          </CssGridContainer>
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
        style={{ height: 225, overflowY: 'auto', paddingTop: 4 }}
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
          scaleKey="majorPentaBlues"
          scaleLabel="Major Pentatonic Blues"
          scaleOption={majorPentaBlues()}
          onSelectScale={() => setSelectedScale(dispatch, 'majorPentaBlues')}
        />
        <Scale
          scaleKey="minorPentaBlues"
          scaleLabel="Minor Pentatonic Blues"
          scaleOption={minorPentaBlues()}
          onSelectScale={() => setSelectedScale(dispatch, 'minorPentaBlues')}
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
      intrumentText: {
        textTransform: 'capitalize',
      },
    })
  );

export default ScalesTab;
