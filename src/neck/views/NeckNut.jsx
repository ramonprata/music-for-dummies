import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { NoteDescription } from '../../shared/components';
import { CssGridContainer } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getScales, getInstrumentStrings, getNextAvailableColor } from '../../shared';
import { useNotesRender } from '../../shared/hooks';

const NeckNut = (props) => {
  const { selectedInstrument } = props;
  const { showNotesOnInstrument } = useContextStore();
  const classes = useStyles(props)();
  const { containerNut } = classes;
  const notesRender = useNotesRender();
  const instrumentStrings = getInstrumentStrings(selectedInstrument);

  return (
    <CssGridContainer alignItems="center" repeatCol={false} className={containerNut}>
      {instrumentStrings.map((cord, idx) => {
        const activeNote = notesRender.find((noteRender) => noteRender.note === cord);
        // const noteColor = getNextAvailableColor(0);
        return (
          <NoteDescription
            key={`${selectedInstrument}-${cord}-${idx}`}
            showNote={true}
            note={cord}
            activeNote={Boolean(activeNote)}
            noteColor={activeNote && showNotesOnInstrument && activeNote.noteColor}
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
