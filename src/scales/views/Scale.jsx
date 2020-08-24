import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, ListItem } from '@material-ui/core';
import { CssGridContainer, CssGridItem } from '../../shared/components';
import { useContextStore } from '../../shared/hooks';

const Scale = (props) => {
  const { scaleOption, scaleLabel, scaleKey, onSelectScale } = props;
  const { selectedScale } = useContextStore();
  const active = scaleKey === selectedScale.scaleName;
  const classes = useStyles(active)();
  const { scaleContainer } = classes;
  const showEharmonic = Boolean(scaleOption.enharmonicScale.length);

  return (
    <ListItem button className={scaleContainer} onClick={onSelectScale}>
      <CssGridContainer templateCol="minmax(40% 1fr)">
        <CssGridItem justify="start">
          <Typography align="left" color="primary" component="span">
            {`${scaleLabel}: `}
          </Typography>
          <Typography align="left" component="span" variant="body2">
            {scaleOption.scale.join(', ')}
          </Typography>
        </CssGridItem>
        {showEharmonic && (
          <Typography variant="body2" color="primary">
            {`Enharmonic: ${scaleOption.enharmonicScale.join(', ')}`}
          </Typography>
        )}
      </CssGridContainer>
    </ListItem>
  );
};

const useStyles = (active) =>
  makeStyles((theme) =>
    createStyles({
      scaleContainer: {
        minHeight: 62,
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderWidth: active ? 3 : 1,
        borderColor: active ? theme.palette.primary.main : theme.palette.grey['300'],
        '&:hover': {
          borderStyle: 'solid',
          borderColor: theme.palette.primary.main,
        },
        '& *': {
          fontWeight: active ? 'bold' : 'normal',
        },
      },
    })
  );

Scale.propTypes = {
  scaleOption: PropTypes.shape({
    scale: PropTypes.string,
  }),
  scaleLabel: PropTypes.string.isRequired,
  scaleKey: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  enharmonicScale: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectScale: PropTypes.func.isRequired,
};

export default Scale;
