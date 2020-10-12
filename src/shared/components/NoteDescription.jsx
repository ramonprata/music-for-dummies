import React, { useMemo } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';

const NoteDescription = (props) => {
  const { showNote, note, showOnlyDescription, noteColor, activeNote, ...styleProps } = props;

  const useStyles = useMemo(() => getStyles(showNote, activeNote, noteColor, showOnlyDescription), [
    showNote,
    activeNote,
    noteColor,
    showOnlyDescription,
  ]);
  const classes = useStyles();
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

const getStyles = (showNote, activeNote, noteColor, showOnlyDescription) =>
  makeStyles((theme) => {
    return createStyles({
      noteContainer: {
        border: `1px solid ${theme.inactiveNoteColor}`,
        borderRadius: 4,
        padding: 2,
        '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        display: showNote ? 'flex' : 'none',
        height: 30,
        width: 30,
        cursor: 'pointer',
        backgroundColor: activeNote && noteColor ? noteColor : theme.inactiveNoteColor,
        '& *': {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
      noteDesc: {
        color: showOnlyDescription ? noteColor : '#fff',
      },
    });
  });

export default React.memo(NoteDescription);
