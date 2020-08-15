import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const Strings = (props) => {
  const { containerStringsWidth } = props;
  const classes = useStyles(props)();
  const { containerStrings, strings } = classes;

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={containerStrings}
      style={{ width: containerStringsWidth }}
    >
      <div className={strings}></div>
      <div className={strings}></div>
      <div className={strings}></div>
      <div className={strings}></div>
    </Grid>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      containerStrings: {
        position: 'absolute',
        zIndex: 1,
      },
      strings: {
        height: 1,
        margin: '20px 0',
        backgroundColor: '#5b6467',
        backgroundImage: `linear-gradient(315deg, #5b6467 0%, #8b939a 74%)`,
      },
    })
  );

export default Strings;
