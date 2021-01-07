import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';

const NoteDescription = (props) => {
  const { showNote, note, showOnlyDescription, noteColor, activeNote, ...styleProps } = props;

  const classes = useStyles({ showNote, activeNote, noteColor, showOnlyDescription });
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
        <Grid
          container
          className={noteContainer}
          alignItems="center"
          justify="center"
          style={{ ...styleProps }}
        >
          {renderDescription()}
        </Grid>
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

const useStyles = makeStyles((theme) => {
  return {
    noteContainer: ({ showNote, activeNote, noteColor }) => ({
      border: `1px solid ${theme.inactiveNoteColor}`,
      borderRadius: 4,
      padding: 2,
      '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
      '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
      opacity: showNote ? 1 : 0,
      display: 'flex',
      height: 30,
      width: 30,
      cursor: 'pointer',
      backgroundColor: activeNote && noteColor ? noteColor : theme.inactiveNoteColor,
      '& *': {
        color: '#fff',
        fontWeight: 'bold',
      },
      '&:hover': {
        opacity: activeNote ? 1 : 0.7,
      },
    }),
    noteDesc: ({ showOnlyDescription, noteColor }) => ({
      color: showOnlyDescription ? noteColor : '#fff',
    }),
  };
});

export default React.memo(NoteDescription);
