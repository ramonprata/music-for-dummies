import React from 'react';
import { makeStyles } from '@material-ui/styles';
import KeyNoteSelect from '../../shared/components/KeyNoteSelect';

const DefaultTab = (props) => {
  const { onSelectNote, selectedNote } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <KeyNoteSelect onSelectNote={onSelectNote} selectedNote={selectedNote} />

      <div className={classes.content}>{props.children}</div>
      <div className={classes.divider} />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    padding: '16px 16px 0 16px',
  },

  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '58px',
    gap: '16px',
    maxHeight: 'calc(20vw - 16px)',
    overflowY: 'auto',
    padding: '8px 4px',
    alignItems: 'center',
    marginTop: 8,
  },
  divider: {
    width: '100%',
    height: 16,
  },
});

export default DefaultTab;
