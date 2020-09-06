import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { getScales } from '../../shared';
import { useContextStore } from '../../shared/hooks/useContextStore';

const Note = (props) => {
  const { scaleName, selectedNote } = useContextStore();
  const { showNotesOnInstrument, stringNote } = props;
  const scaleRender = scaleName && getScales(selectedNote)[scaleName]();
  const activeNote = Boolean(scaleRender?.scale?.includes(stringNote));

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
  activeNote: PropTypes.bool,
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
        padding: 1,
        cursor: 'pointer',
        backgroundColor: !activeNote ? '#323130' : theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
        },
        '& *': {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    });
  });

export default React.memo(Note, (p, n) => {
  const sameNote = p.stringNote === n.stringNote;
  return sameNote;
});
