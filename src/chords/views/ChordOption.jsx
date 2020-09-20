import React from 'react';
import PropTypes from 'prop-types';
import { useContextStore } from '../../shared/hooks';
import { ListItemDescription } from '../../shared/components/';
import { getNextAvailableColor, mapNotesColors } from '../../shared';
import { Typography } from '@material-ui/core';

const ChordOption = (props) => {
  const { chordOption, chordNotation, chordKey, onSelectChord } = props;
  const { selectedChord } = useContextStore();
  const active = chordKey === selectedChord;
  const mappedNotesColor = mapNotesColors(chordOption.chordNotes);
  let enharmonicNotes;
  if (chordOption.enharmonicChord) {
    enharmonicNotes = mapNotesColors(chordOption.enharmonicChord);
  }
  return (
    <ListItemDescription
      type="chord"
      notation={chordNotation}
      notes={mappedNotesColor}
      enharmonicNotes={enharmonicNotes}
      subDescription={chordOption.intervals.map((interval, idx, intervals) => (
        <Typography
          component="span"
          variant="body2"
          style={{
            color: getNextAvailableColor(idx),
          }}
        >
          {`${interval}${idx === intervals.length - 1 ? '' : ', '}`}
        </Typography>
      ))}
      onSelectItem={onSelectChord}
      subNotation="Pattern"
      active={active}
    />
  );
};

ChordOption.propTypes = {
  chordOption: PropTypes.shape({
    scale: PropTypes.arrayOf(PropTypes.string),
  }),
  chordNotation: PropTypes.string.isRequired,
  chordKey: PropTypes.string.isRequired,
  enharmonicScale: PropTypes.arrayOf(PropTypes.string),
  onSelectChord: PropTypes.func.isRequired,
};

export default ChordOption;
