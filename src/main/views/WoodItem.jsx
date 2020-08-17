import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Checkbox, Grid, Paper } from '@material-ui/core';
import { woodNecksDesign } from '../../shared/utils';

const WoodItem = (props) => {
  const { onSelectNeck, woodName, selectedNeck } = props;
  const classes = useStyles(props)();
  const { woodPictureContainer, woodPictureSelect, activeWood } = classes;

  return (
    <Paper
      className={woodPictureContainer}
      style={{
        backgroundImage: `url(${woodNecksDesign[woodName]})`,
      }}
    >
      <Grid
        container
        direction="row"
        justify="flex-end"
        className={[woodPictureSelect, woodName === selectedNeck ? activeWood : ''].join(' ')}
        onClick={() => onSelectNeck(woodName)}
      >
        <Checkbox
          color="default"
          checked={Boolean(woodName === selectedNeck)}
          onChange={() => onSelectNeck(woodName)}
          style={{ padding: 0, height: '50%', color: '#fff' }}
        />
      </Grid>
    </Paper>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      woodPictureContainer: {
        cursor: 'pointer',
        width: 60,
        height: 60,
      },
      woodPictureSelect: {
        width: 60,
        height: 60,
        backgroundColor: '#ccc',
        opacity: '0.2',
        borderRadius: 4,
        '&:hover': {
          opacity: 1,
          backgroundColor: 'transparent',
        },
      },
      activeWood: {
        opacity: 1,
        backgroundColor: 'transparent',
      },
    })
  );

export default React.memo(WoodItem);
