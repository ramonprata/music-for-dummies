import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormControlLabel, Switch, Paper, ListItem } from '@material-ui/core';
import { CssGridContainer, CssGridItem } from '../../shared/components';
import InlineTextWithSeparator from '../../shared/components/InlineTexWithSeparator';

const Scale = (props) => {
  const { notes, scaleName } = props;
  const classes = useStyles(props)();
  const { scaleContainer } = classes;

  return (
    <ListItem button className={scaleContainer}>
      <CssGridContainer templateCol="minmax(40% 1fr)">
        <CssGridItem justify="start">
          <Typography align="left" color="primary" component="span">
            {`${scaleName}: `}
          </Typography>

          {notes.map((noteScale, idx) => (
            <InlineTextWithSeparator text={noteScale} idx={idx} />
          ))}
        </CssGridItem>
      </CssGridContainer>
    </ListItem>
  );
};

const useStyles = () =>
  makeStyles((theme) =>
    createStyles({
      scaleContainer: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        '&:hover': {
          border: `solid 1px ${theme.palette.primary.main}`,
        },
      },
    })
  );

Scale.propTypes = {
  scaleName: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Scale;
