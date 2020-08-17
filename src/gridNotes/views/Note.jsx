import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const Note = () => {
  const classes = useStyles()();
  const { note } = classes;

  return (
    <Paper className={note} elevation={3}>
      <Typography color="textSecondary" variant="subtitle2">
        #
      </Typography>
    </Paper>
  );
};

const useStyles = () =>
  makeStyles((theme) =>
    createStyles({
      note: {
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

export default React.memo(Note, () => true);
