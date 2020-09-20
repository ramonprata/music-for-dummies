import React from 'react';
import ChordOption from './ChordOption';
import { getChords } from '../../shared/chords';
import { useMemo } from 'react';

const ChordsTab = (props) => {
  const { selectedNote } = props;
  const {
    major,
    minor,
    majorWithMinorSeventh,
    minorWithMinorSeventh,
    majorWithMajorSeventh,
    diminishedTriad,
    diminishedSeventh,
  } = useMemo(() => getChords(selectedNote), [selectedNote]);

  return (
    <React.Fragment>
      <ChordOption chordOption={major} chordNotation={major.notation} chordKey="major" />
      <ChordOption chordOption={minor} chordNotation={minor.notation} chordKey="minor" />
      <ChordOption
        chordOption={diminishedTriad}
        chordNotation={diminishedTriad.notation}
        chordKey="diminishedTriad"
      />
      <ChordOption
        chordOption={majorWithMinorSeventh}
        chordNotation={majorWithMinorSeventh.notation}
        chordKey="majorWithMinorSeventh"
      />
      <ChordOption
        chordOption={minorWithMinorSeventh}
        chordNotation={minorWithMinorSeventh.notation}
        chordKey="minorWithMinorSeventh"
      />
      <ChordOption
        chordOption={majorWithMajorSeventh}
        chordNotation={majorWithMajorSeventh.notation}
        chordKey="majorWithMajorSeventh"
      />
      <ChordOption
        chordOption={diminishedSeventh}
        chordNotation={diminishedSeventh.notation}
        chordKey="diminishedSeventh"
      />
    </React.Fragment>
  );
};

export default ChordsTab;
