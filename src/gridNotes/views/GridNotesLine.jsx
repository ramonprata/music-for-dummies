import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT, getScales, getNextAvailableColor } from '../../shared';
import { NoteDescription } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';

const GridNotesLine = (props) => {
  const { showNotesOnInstrument, scaleName, selectedNote } = useContextStore();
  const { stringNotes } = props;
  const classes = useStyles(props)();
  const { lineContainer } = classes;
  const scaleRender = scaleName && getScales(selectedNote)[scaleName]();

  const getCols = useMemo(() => {
    if (scaleName) {
      return stringNotes.map((stringNote, idx) => {
        if (idx > 0) {
          const activeNote = Boolean(scaleRender?.scale?.includes(stringNote));
          return (
            <GridNotesCol key={`grid-note-col-${idx}`} index={idx}>
              <NoteDescription
                idx={idx}
                stringNote={stringNote}
                showNote={showNotesOnInstrument && activeNote}
                note={stringNote}
                noteColor={getNextAvailableColor(0)}
                activeNote={activeNote}
              />
            </GridNotesCol>
          );
        }
        return null;
      });
    }
  }, [scaleName, showNotesOnInstrument, stringNotes, selectedNote]);

  return (
    <Grid container direction="row" className={lineContainer} wrap="nowrap">
      {scaleName && getCols}
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
