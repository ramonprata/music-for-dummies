import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { NECK_WIDTH } from '../../shared';

const GridNotes = (props) => {
  const { renderLines } = props;
  const classes = useStyles(props)();
  const {} = classes;

  return (
    <Grid
      container
      direction="column"
      style={{
        width: NECK_WIDTH,
        zIndex: 3,
        position: 'absolute',
      }}
    >
      {renderLines()}
    </Grid>
  );
};

const useStyles = () => makeStyles(() => createStyles({}));

export default GridNotes;
