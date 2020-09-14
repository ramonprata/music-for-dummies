import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssGridContainer } from '../../shared/components';
import KeyNoteSelect from '../../shared/components/KeyNoteSelect';

const DefaultTab = (props) => {
  const { onSelectNote, selectedNote } = props;
  const classes = useStyles(props)();
  const { container } = classes;

  return (
    <CssGridContainer
      repeatCol={false}
      alignContent="start"
      className={container}
      rowGap={16}
      justifyContent="center"
    >
      <KeyNoteSelect onSelectNote={onSelectNote} selectedNote={selectedNote} />

      <CssGridContainer
        alignItems="center"
        templateCol="0.5fr 0.5fr"
        // templateCol="0.5fr"
        templateRow={52}
        repeatRow={true}
        repeatCol={false}
        gap={16}
        style={{ height: 225, overflowY: 'auto', paddingTop: 4 }}
      >
        {props.children}
      </CssGridContainer>
    </CssGridContainer>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      container: {
        padding: 16,
      },
    })
  );

export default DefaultTab;
