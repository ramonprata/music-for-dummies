import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ChordOption from './ChordOption';
import { getChords } from '../../shared/chords';
import { setSelectedChord } from '../store';
import { useContextStore } from '../../shared/hooks';

const ChordsTab = (props) => {
  const { selectedNote } = props;
  const { dispatch } = useContextStore();

  const onSelectChord = (value) => {
    setSelectedChord(dispatch, value);
  };

  const {
    major,
    minor,
    majorWithMinorSeventh,
    minorWithMinorSeventh,
    majorWithMajorSeventh,
    diminishedTriad,
    diminishedSeventh,
  } = getChords(selectedNote);

  const majorChord = major();
  const minorChord = minor();
  const majorWithMinorSeventhChord = majorWithMinorSeventh();
  const minorWithMinorSeventhChord = minorWithMinorSeventh();
  const majorWithMajorSeventhChord = majorWithMajorSeventh();
  const diminishedTriadChord = diminishedTriad();
  const diminishedSeventhChord = diminishedSeventh();

  return (
    <React.Fragment>
      <ChordOption
        chordOption={majorChord}
        chordNotation={majorChord.notation}
        chordKey="major"
        onSelectChord={() => onSelectChord('major')}
      />
      <ChordOption
        chordOption={minorChord}
        chordNotation={minorChord.notation}
        chordKey="minor"
        onSelectChord={() => onSelectChord('minor')}
      />
      <ChordOption
        chordOption={diminishedTriadChord}
        chordNotation={diminishedTriadChord.notation}
        chordKey="diminishedTriad"
        onSelectChord={() => onSelectChord('diminishedTriad')}
      />
      <ChordOption
        chordOption={majorWithMinorSeventhChord}
        chordNotation={majorWithMinorSeventhChord.notation}
        chordKey="majorWithMinorSeventh"
        onSelectChord={() => onSelectChord('majorWithMinorSeventh')}
      />
      <ChordOption
        chordOption={minorWithMinorSeventhChord}
        chordNotation={minorWithMinorSeventhChord.notation}
        chordKey="minorWithMinorSeventh"
        onSelectChord={() => onSelectChord('minorWithMinorSeventh')}
      />
      <ChordOption
        chordOption={majorWithMajorSeventhChord}
        chordNotation={majorWithMajorSeventhChord.notation}
        chordKey="majorWithMajorSeventh"
        onSelectChord={() => onSelectChord('majorWithMajorSeventh')}
      />
      <ChordOption
        chordOption={diminishedSeventhChord}
        chordNotation={diminishedSeventhChord.notation}
        chordKey="diminishedSeventh"
        onSelectChord={() => onSelectChord('diminishedSeventh')}
      />
    </React.Fragment>
  );
};

const useStyles = () => makeStyles(() => createStyles({}));

export default ChordsTab;
