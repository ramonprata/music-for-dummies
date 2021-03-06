import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { NoteDescription } from '../../shared/components';
import { CssGridContainer } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getInstrumentStrings } from '../../shared';
import { useNotesRender } from '../../shared/hooks';

const NeckNut = (props) => {
  const { showNotesOnInstrument, selectedInstrument } = useContextStore();
  const classes = useStyles();
  const { containerNut, containerNote } = classes;
  const notesRender = useNotesRender();
  const instrumentStrings = getInstrumentStrings(selectedInstrument);

  return (
    <CssGridContainer alignItems="center" repeatCol={false} className={containerNut}>
      {instrumentStrings.map((cord, idx) => {
        const activeNote = notesRender.find((noteRender) => noteRender.note === cord);
        return (
          <div className={containerNote} key={`${cord}${idx}`}>
            <NoteDescription
              key={`${selectedInstrument}-${cord}-${idx}`}
              showNote={true}
              note={cord}
              activeNote={Boolean(activeNote)}
              noteColor={activeNote && showNotesOnInstrument && activeNote.noteColor}
            />
          </div>
        );
      })}
    </CssGridContainer>
  );
};

const useStyles = makeStyles({
  containerNut: {
    backgroundColor: '#b4a576',
    padding: '0 2px 0px 2px',
  },
  containerNote: {
    marginTop: 4,
  },
});

export default NeckNut;
