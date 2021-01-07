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
      <Scale key="chromatic" scaleKey="chromatic" scaleLabel="Chromatic" scaleOption={chromatic} />
      <Scale key="major" scaleKey="major" scaleLabel="Major" scaleOption={major} />
      <Scale key="minor" scaleKey="minor" scaleLabel="Minor" scaleOption={minor} />
      <Scale
        key="majorPentatonic"
        scaleKey="majorPentatonic"
        scaleLabel="Major Pentatonic"
        scaleOption={majorPentatonic}
      />
      <Scale
        key="minorPentatonic"
        scaleKey="minorPentatonic"
        scaleLabel="Minor Pentatonic"
        scaleOption={minorPentatonic}
      />
      <Scale
        key="majorPentaBlues"
        scaleKey="majorPentaBlues"
        scaleLabel="Major Pentatonic Blues"
        scaleOption={majorPentaBlues}
      />
      <Scale
        key="minorPentaBlues"
        scaleKey="minorPentaBlues"
        scaleLabel="Minor Pentatonic Blues"
        scaleOption={minorPentaBlues}
      />
    </React.Fragment>
  );
};

export default ScalesTab;
