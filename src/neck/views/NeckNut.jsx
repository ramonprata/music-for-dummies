import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { NoteDescription } from '../../shared/components';
import { CssGridContainer } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getScales, getInstrumentStrings, getNextAvailableColor } from '../../shared';

const NeckNut = (props) => {
  const { selectedInstrument } = props;
  const { scaleName, selectedNote } = useContextStore();
  const classes = useStyles(props)();
  const { containerNut } = classes;
  const scaleRender = scaleName && getScales(selectedNote)[scaleName]();
  const instrumentStrings = getInstrumentStrings(selectedInstrument);
  return (
    <CssGridContainer alignItems="center" repeatCol={false} className={containerNut}>
      {instrumentStrings.map((cord, idx) => {
        const activeNote = Boolean(scaleName && scaleRender.scale.includes(cord));
        const noteColor = getNextAvailableColor(0);
        return (
          <NoteDescription
            key={`${selectedInstrument}-${cord}-${idx}`}
            showNote={true}
            note={cord}
            activeNote={activeNote}
            noteColor={noteColor}
          />
        );
      })}
    </CssGridContainer>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      containerNut: {
        backgroundColor: '#b4a576',
        padding: '0 2px 0px 2px',
      },
    })
  );

export default NeckNut;
