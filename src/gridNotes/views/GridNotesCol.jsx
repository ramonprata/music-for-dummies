import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { calcGridNoteWidth } from '../../shared';

const GridNotesCol = (props) => {
  const classes = useStyles(props);
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

const useStyles = makeStyles({
  colContainer: ({ index, neckDesignApply }) => ({
    width: calcGridNoteWidth(index),
    height: '100%',
    backgroundImage: `url(${neckDesignApply})`,
    backgroundRepeat: 'repeat',
  }),
});

export default GridNotesCol;
