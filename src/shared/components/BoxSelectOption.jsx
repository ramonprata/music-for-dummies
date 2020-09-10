import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Checkbox, Grid, Paper } from '@material-ui/core';

const BoxSelectOption = (props) => {
  const { onSelect, value, selectedOption, bkgStyle } = props;
  const classes = useStyles(props)();
  const { boxSelectContainer, boxSelect, activeBox } = classes;

  return (
    <Paper
      className={boxSelectContainer}
      style={{
        ...bkgStyle,
      }}
    >
      <Grid
        container
        direction="row"
        justify="flex-end"
        className={[boxSelect, value === selectedOption ? activeBox : ''].join(' ')}
        onClick={() => onSelect(value)}
      >
        <Checkbox
          size="small"
          color="default"
          checked={Boolean(value === selectedOption)}
          onChange={() => onSelect(value)}
          style={{ padding: 0, height: '50%', color: '#fff' }}
        />
      </Grid>
    </Paper>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      boxSelectContainer: {
        cursor: 'pointer',
        width: '100%',
        height: '100%',
      },
      boxSelect: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        opacity: '0.2',
        borderRadius: 4,
        '&:hover': {
          opacity: 1,
          backgroundColor: 'transparent',
        },
      },
      activeBox: {
        opacity: 1,
        backgroundColor: 'transparent',
      },
    })
  );

export default BoxSelectOption;
