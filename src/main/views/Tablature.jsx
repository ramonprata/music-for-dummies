import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core/';
import { calcRoomContainerWidth, ROOMS } from '../../shared/utils';
import { ukuleleStrings } from '../../shared/defaultValues';
import { getAscendingChromaticScale } from '../../shared';

const Tablature = (props) => {
  const { showNotes, numberOfStrings, NECK_HEIGHT, NECK_WIDTH } = props;
  const classes = useStyles(NECK_HEIGHT, NECK_WIDTH)();
  const { tabs, note } = classes;

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={tabs}>
      {ukuleleStrings.map((originNote) => {
        // const notes = getAscendingChromaticScale(originNote, 15);
        // notes.shift();
        return (
          <Grid container direction="row" justify="center">
            {showNotes &&
              Array(ROOMS)
                .fill(true)
                .map((_, idx) => {
                  const roomWidth = calcRoomContainerWidth(props.NECK_WIDTH, idx);
                  return (
                    <Grid
                      key={idx}
                      container
                      alignItems="center"
                      justify="center"
                      direction="column"
                      item
                      style={{
                        width: roomWidth,
                      }}
                    >
                      {/* <Paper variant="outlined" elevation={2} className={note}>
                        <Typography variant="caption">{notes[idx]}</Typography>
                      </Paper> */}
                    </Grid>
                  );
                })}
          </Grid>
        );
      })}
    </Grid>
  );
};

const useStyles = (NECK_HEIGHT, NECK_WIDTH) =>
  makeStyles(() =>
    createStyles({
      note: {
        zIndex: 3,
        height: 24,
        width: 24,
        borderRadius: 4,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#3b3a39',
        color: '#999',
        '&:hover': {
          color: '#fff',
          fontWeight: 'bold',
        },
      },
      tabs: {
        height: NECK_HEIGHT,
        width: NECK_WIDTH,
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'transparent',
      },
    })
  );

export default Tablature;
