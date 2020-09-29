import React from 'react';
import ChordOption from './ChordOption';
import { getChords } from '../../shared/chords';
import { useMemo } from 'react';
import { setSelectedChord } from '../store';
import { useContextStore } from '../../shared/hooks';

const ChordsTab = (props) => {
  const { selectedNote } = props;
  const { selectedChord, dispatch } = useContextStore();

  const onSelectChord = (chordKey) => setSelectedChord(dispatch, chordKey);

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
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'major')}
        chordOption={major}
        chordNotation={major.notation}
        chordKey="major"
      />
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'minor')}
        chordOption={minor}
        chordNotation={minor.notation}
        chordKey="minor"
      />
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'diminishedTriad')}
        chordOption={diminishedTriad}
        chordNotation={diminishedTriad.notation}
        chordKey="diminishedTriad"
      />
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'majorWithMinorSeventh')}
        chordOption={majorWithMinorSeventh}
        chordNotation={majorWithMinorSeventh.notation}
        chordKey="majorWithMinorSeventh"
      />
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'minorWithMinorSeventh')}
        chordOption={minorWithMinorSeventh}
        chordNotation={minorWithMinorSeventh.notation}
        chordKey="minorWithMinorSeventh"
      />
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'majorWithMajorSeventh')}
        chordOption={majorWithMajorSeventh}
        chordNotation={majorWithMajorSeventh.notation}
        chordKey="majorWithMajorSeventh"
      />
      <ChordOption
        selectedChord={selectedChord}
        onSelectChord={onSelectChord.bind(null, 'diminishedSeventh')}
        chordOption={diminishedSeventh}
        chordNotation={diminishedSeventh.notation}
        chordKey="diminishedSeventh"
      />
    </React.Fragment>
  );
};

export default ChordsTab;
