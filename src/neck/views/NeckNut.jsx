import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Note from '../../gridNotes/views/Note';
import { CssGridContainer } from '../../shared/components';

const NeckNut = (props) => {
  const { instrumentStrings, instrument } = props;
  const classes = useStyles(props)();
  const { containerNut } = classes;

  return (
    <CssGridContainer alignItems="center" repeatCol={false} className={containerNut}>
      {instrumentStrings.map((cord, idx) => (
        <Note key={`${instrument}-${cord}-${idx}`} showNotesOnInstrument={true} stringNote={cord} />
      ))}
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
