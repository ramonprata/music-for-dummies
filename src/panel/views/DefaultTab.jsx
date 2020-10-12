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
        templateRow={'58px'}
        repeatRow={true}
        repeatCol={false}
        gap={16}
        style={{ height: 240, overflowY: 'auto', padding: '8px 4px' }}
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
