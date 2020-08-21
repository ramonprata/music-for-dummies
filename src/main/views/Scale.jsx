import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormControlLabel, Switch, Paper } from '@material-ui/core';
import { CssGridContainer, CssGridItem } from '../../shared/components';

const Scale = (props) => {
  const { notes, scaleName } = props;
  const classes = useStyles(props)();
  const { scaleContainer } = classes;

  return (
    <Paper square variant="outlined" className={scaleContainer}>
      <CssGridContainer templateRow="32px" repeatRow repeatCol={false} alignItems="center">
        <CssGridItem justify="start">
          <Typography align="left" color="primary" component="span">
            {scaleName}
          </Typography>
        </CssGridItem>

        <CssGridItem justify="start">
          {notes.map((noteScale, idx) => (
            <Typography key={noteScale} component="span">{`${
              idx != 0 ? ' - ' : ''
            }${noteScale} `}</Typography>
          ))}
        </CssGridItem>
      </CssGridContainer>
    </Paper>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      scaleContainer: {
        padding: '8px 8px 0 8px',
      },
    })
  );

Scale.propTypes = {
  scaleName: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Scale;
