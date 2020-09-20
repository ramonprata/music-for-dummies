import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const NoteDescription = (props) => {
  const { showNote, note, showOnlyDescription, noteColor, activeNote } = props;

  const classes = useStyles(showNote, activeNote, noteColor, showOnlyDescription)();
  const { noteContainer, noteDesc } = classes;

  const renderDescription = () => {
    return (
      <Typography component="span" className={noteDesc} variant="subtitle2">
        {`${note} `}
      </Typography>
    );
  };

  return (
    <React.Fragment>
      {showOnlyDescription ? (
        renderDescription()
      ) : (
        <div className={noteContainer}>{renderDescription()}</div>
      )}
    </React.Fragment>
  );
};

NoteDescription.propTypes = {
  showNote: PropTypes.bool,
  activeNote: PropTypes.bool,
  showOnlyDescription: PropTypes.bool,
  note: PropTypes.string,
  noteColor: PropTypes.string,
};

const useStyles = (showNote, activeNote, noteColor, showOnlyDescription) =>
  makeStyles((theme) => {
    return createStyles({
      noteContainer: {
        border: `1px solid ${theme.inactiveNoteColor}`,
        borderRadius: 4,
        '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        display: showNote ? 'block' : 'none',
        height: 22,
        width: 22,
        padding: 1,
        cursor: 'pointer',
        backgroundColor: activeNote && noteColor ? noteColor : theme.inactiveNoteColor,
        '& *': {
          color: '#fff',
        },
      },
      noteDesc: {
        color: showOnlyDescription ? noteColor : '#fff',
      },
    });
  });

export default NoteDescription;
