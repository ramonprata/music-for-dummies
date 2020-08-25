import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Note from '../../gridNotes/views/Note';
import { CssGridContainer } from '../../shared/components';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { getScales } from '../../shared';

const NeckNut = (props) => {
  const { instrumentStrings, instrument } = props;
  const { scaleName, selectedNote } = useContextStore();
  const classes = useStyles(props)();
  const { containerNut } = classes;
  const scaleRender = scaleName && getScales(selectedNote)[scaleName]();

  return (
    <CssGridContainer alignItems="center" repeatCol={false} className={containerNut}>
      {instrumentStrings.map((cord, idx) => {
        const activeNote = scaleName && scaleRender.scale.includes(cord);
        return (
          <Note
            key={`${instrument}-${cord}-${idx}`}
            showNotesOnInstrument={true}
            stringNote={cord}
            activeNote={activeNote}
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
        padding: '0 2px',
      },
    })
  );

export default NeckNut;
