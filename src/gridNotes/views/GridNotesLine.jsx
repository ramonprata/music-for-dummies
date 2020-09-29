import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT } from '../../shared';
import { NoteDescription } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';

const GridNotesLine = (props) => {
  const { showNotesOnInstrument } = useContextStore();
  const { stringNotes, notesRender } = props;
  const useStyles = useMemo(() => getStyles(), []);
  const classes = useStyles();

  const { lineContainer } = classes;

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
                borderRadius="50%"
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

const getStyles = () =>
  makeStyles(() =>
    createStyles({
      lineContainer: {
        height: GRID_NOTE_LINE_HEIGHT,
      },
    })
  );

export default GridNotesLine;
