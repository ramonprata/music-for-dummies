import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { calcGridNoteWidth } from '../../shared';

const GridNotesCol = (props) => {
  const classes = useStyles(props)();
  const { colContainer } = classes;

  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={colContainer}
    >
      {props.children}
    </Grid>
  );
};

const useStyles = ({ index, showFrets }) =>
  makeStyles(() =>
    createStyles({
      colContainer: {
        borderLeft: showFrets && 'solid 3px #b4a576',
        width: calcGridNoteWidth(index),
        overflow: 'hidden',
      },
    })
  );

export default React.memo(GridNotesCol);
