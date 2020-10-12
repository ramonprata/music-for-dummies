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

const useStyles = ({ index, showFrets, neckDesignApply }) =>
  makeStyles(() =>
    createStyles({
      colContainer: {
        width: calcGridNoteWidth(index),
        height: '100%',
        backgroundImage: `url(${neckDesignApply})`,
        backgroundRepeat: 'repeat',
      },
    })
  );

export default GridNotesCol;
