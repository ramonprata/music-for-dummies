import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import GridNotesCol from './GridNotesCol';
import { GRID_NOTE_LINE_HEIGHT } from '../../shared';
import Note from './Note';
import { useContextStore } from '../../shared/hooks/useContextStore';

const GridNotesLine = (props) => {
  const { showNotesOnInstrument, scaleName } = useContextStore();
  const { stringNotes } = props;
  const classes = useStyles(props)();
  const { lineContainer } = classes;

  const getCols = useMemo(() => {
    if (scaleName) {
      return stringNotes.map((stringNote, idx) => {
        if (idx > 0) {
          return (
            <GridNotesCol key={`grid-note-col-${idx}`} index={idx}>
              <Note
                idx={idx}
                stringNote={stringNote}
                showNotesOnInstrument={showNotesOnInstrument}
              />
            </GridNotesCol>
          );
        }
        return null;
      });
    }
  }, [scaleName, showNotesOnInstrument, stringNotes]);

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
