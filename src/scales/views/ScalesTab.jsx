import React from 'react';
import { getScales } from '../../shared';
import Scale from './Scale';
import { setSelectedScale } from '../store';
import { useContextStore } from '../../shared/hooks';

const ScalesTab = (props) => {
  const { selectedNote } = props;
  const { dispatch } = useContextStore();

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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ScalesTab;
