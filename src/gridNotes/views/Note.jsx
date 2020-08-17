import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const Note = (props) => {
  const { showNotesOnInstrument } = props;
  const classes = useStyles(showNotesOnInstrument)();
  const { note } = classes;

  return (
    <div className={note}>
      <span>#</span>
    </div>
  );
};

const useStyles = (showNotesOnInstrument) =>
  makeStyles((theme) =>
    createStyles({
      note: {
        border: '1px solid #323130',
        borderRadius: 4,
        '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        display: !showNotesOnInstrument ? 'none' : 'block',
        height: 22,
        width: 22,
        padding: 2,
        cursor: 'pointer',
        backgroundColor: '#323130',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        '& *': {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    })
  );

export default React.memo(Note, (p, n) => p.showNotesOnInstrument === n.showNotesOnInstrument);
