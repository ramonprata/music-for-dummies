import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssGridContainer } from '../../shared/components';
import { getScales } from '../../shared';
import Scale from './Scale';
import { setSelectedScale } from '../store';
import KeyNoteSelect from '../../shared/components/KeyNoteSelect';
import { useContextStore } from '../../shared/hooks';

const ScalesTab = (props) => {
  const { onSelectNote, selectedNote } = props;
  const { dispatch } = useContextStore();

  const classes = useStyles(props)();
  const { scaleContainer } = classes;

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
      <KeyNoteSelect onSelectNote={onSelectNote} selectedNote={selectedNote} />

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
    })
  );

export default ScalesTab;
