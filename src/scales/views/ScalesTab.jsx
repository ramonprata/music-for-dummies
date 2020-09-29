import React from 'react';
import { getScales } from '../../shared';
import Scale from './Scale';
import { useMemo } from 'react';

const ScalesTab = (props) => {
  const { selectedNote } = props;
  const {
    chromatic,
    major,
    minor,
    majorPentatonic,
    minorPentatonic,
    majorPentaBlues,
    minorPentaBlues,
  } = useMemo(() => getScales(selectedNote), [selectedNote]);

  return (
    <React.Fragment>
      <Scale scaleKey="chromatic" scaleLabel="Chromatic" scaleOption={chromatic} />
      <Scale scaleKey="major" scaleLabel="Major" scaleOption={major} />
      <Scale scaleKey="minor" scaleLabel="Minor" scaleOption={minor} />
      <Scale
        scaleKey="majorPentatonic"
        scaleLabel="Major Pentatonic"
        scaleOption={majorPentatonic}
      />
      <Scale
        scaleKey="minorPentatonic"
        scaleLabel="Minor Pentatonic"
        scaleOption={minorPentatonic}
      />
      <Scale
        scaleKey="majorPentaBlues"
        scaleLabel="Major Pentatonic Blues"
        scaleOption={majorPentaBlues}
      />
      <Scale
        scaleKey="minorPentaBlues"
        scaleLabel="Minor Pentatonic Blues"
        scaleOption={minorPentaBlues}
      />
    </React.Fragment>
  );
};

export default ScalesTab;
