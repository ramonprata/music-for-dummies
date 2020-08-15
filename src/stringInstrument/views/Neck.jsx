import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { NECK_HEIGHT, NECK_WIDTH, markRooms } from '../../shared/utils';
import { calcMarkPosition, getNeckDesign, getRoomSizes } from '../stringInstrumentUtils';
import Strings from './Strings';

const Neck = (props) => {
  const { selectedNeck } = props;
  const neckDesignApply = getNeckDesign(selectedNeck);
  const classes = useStyles(neckDesignApply)();
  const { neckContainer, roomContainer, neckMark } = classes;
  const roomsSizes = getRoomSizes();
  const stringsSize = roomsSizes.reduce((accu, current) => (accu += current));
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={neckContainer}
      >
        {roomsSizes.map((roomWidth, idx) => {
          const showMark = markRooms.includes(idx);
          return (
            <Grid
              key={idx}
              container
              alignItems="center"
              direction="column"
              item
              className={roomContainer}
              style={{
                width: roomWidth,
                height: NECK_HEIGHT,
              }}
            >
              {showMark && <div className={neckMark} />}
            </Grid>
          );
        })}
      </Grid>
      <Strings containerStringsWidth={stringsSize} />
    </React.Fragment>
  );
};

const useStyles = (neckDesignApply) =>
  makeStyles(() =>
    createStyles({
      containerBox: {
        height: NECK_HEIGHT,
        width: NECK_WIDTH,
      },
      neckContainer: {
        height: NECK_HEIGHT,
        width: NECK_WIDTH,
      },
      roomContainer: {
        borderLeft: '3px solid #a39370',
        backgroundImage: `url(${neckDesignApply})`,
      },
      neckMark: {
        width: 20,
        height: 20,
        backgroundColor: ' #2d3436',
        backgroundImage: 'linear-gradient(315deg, #2d3436 0%, #d3d3d3 74%)',
        borderRadius: '50%',
        position: 'absolute',
        marginTop: calcMarkPosition(NECK_HEIGHT),
      },
    })
  );

export default Neck;
