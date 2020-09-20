import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT, getScales, getNextAvailableColor } from '../../shared';
import { NoteDescription } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getMajorChord } from '../../shared/chords';
import { useNotesRender } from '../../shared/hooks';

const GridNotesLine = (props) => {
  const { showNotesOnInstrument, scaleName, selectedNote, selectedTab } = useContextStore();
  const { stringNotes } = props;
  const classes = useStyles(props)();
  const { lineContainer } = classes;
  const notesRender = useNotesRender();

  const getCols = () => {
    if (notesRender) {
      return stringNotes.map((stringNote, idx) => {
        if (idx > 0) {
          const activeNote = notesRender.find((noteRender) => noteRender.note === stringNote);
          return (
            <GridNotesCol key={`grid-note-col-${idx}`} index={idx}>
              <NoteDescription
                idx={idx}
                showNote={showNotesOnInstrument && Boolean(activeNote)}
                note={stringNote}
                noteColor={activeNote && activeNote.noteColor}
                activeNote={Boolean(activeNote)}
              />
            </GridNotesCol>
          );
        }
        return null;
      });
    }
  };

  return (
    <Grid container direction="row" className={lineContainer} wrap="nowrap">
      {notesRender && getCols()}
    </Grid>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      lineContainer: {
        height: GRID_NOTE_LINE_HEIGHT,
      },
    })
  );

// export default React.memo(GridNotesLine, (p, n) => p.stringNotes === n.stringNotes);
export default GridNotesLine;
