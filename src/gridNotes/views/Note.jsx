import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const Note = (props) => {
  const classes = useStyles(props)();
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
          backgroundImage: '',
        },
        '& *': {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
    })
  );

export default Note;
