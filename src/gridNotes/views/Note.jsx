import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const Note = (props) => {
  const { showNotesOnInstrument, stringNote, activeNote } = props;
  const classes = useStyles(showNotesOnInstrument, activeNote)();
  const { note } = classes;
  return (
    <div className={note}>
      <span>{stringNote}</span>
    </div>
  );
};

Note.propTypes = {
  showNotesOnInstrument: PropTypes.bool,
  stringNote: PropTypes.string,
};

const useStyles = (showNotesOnInstrument, activeNote) =>
  makeStyles((theme) => {
    return createStyles({
      note: {
        border: '1px solid #323130',
        borderRadius: 4,
        '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        display: showNotesOnInstrument || activeNote ? 'block' : 'none',
        height: 22,
        width: 22,
        padding: 2,
        cursor: 'pointer',
        backgroundColor: !activeNote ? '#323130' : theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'orange',
        },
        '& *': {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    });
  });

export default Note;
