import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Checkbox, Paper } from '@material-ui/core/';
import { woodNecksDesign } from '../../shared/utils';

const NeckSelect = (props) => {
  const { onSelectNeck, selectedNeck } = props;
  const classes = useStyles()();
  const { woodPictureContainer, woodPictureSelect, activeWood } = classes;

  return (
    <Grid container direction="row" justify="space-between">
      {Object.keys(woodNecksDesign).map((key) => (
        <Grid item key={key}>
          <Paper
            className={woodPictureContainer}
            style={{
              backgroundImage: `url(${woodNecksDesign[key]})`,
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-end"
              className={[woodPictureSelect, key === selectedNeck ? activeWood : ''].join(' ')}
              onClick={() => onSelectNeck(key)}
            >
              <Checkbox
                color="default"
                checked={Boolean(key === selectedNeck)}
                onChange={() => onSelectNeck(key)}
                style={{ padding: 0, height: '50%', color: '#fff' }}
              />
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
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

export default NeckSelect;
