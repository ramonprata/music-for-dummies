import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssGridContainer } from '../../shared/components';
import KeyNoteSelect from '../../shared/components/KeyNoteSelect';

const DefaultTab = (props) => {
  const { onSelectNote, selectedNote } = props;
  const classes = useStyles(props)();
  const { container } = classes;

  return (
    <div className={classes.container}>
      <KeyNoteSelect onSelectNote={onSelectNote} selectedNote={selectedNote} />

      <div className={classes.content}>{props.children}</div>
      <div
        style={{
          width: '100%',
          height: 16,
        }}
      ></div>
    </div>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
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
      },
    })
  );

export default DefaultTab;
