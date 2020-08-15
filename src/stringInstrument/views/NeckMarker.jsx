import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { markRooms, NUMBER_OF_LINES } from '../../shared';

const NeckMarker = (props) => {
  const { room } = props;
  const classes = useStyles(props)();
  const { marker } = classes;
  const showMarker = markRooms.includes(room);
  return showMarker && <div className={marker} />;
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      marker: {
        height: NUMBER_OF_LINES * 4.5,
        width: NUMBER_OF_LINES * 4.5,
        borderRadius: '50%',
        backgroundColor: '#2f4353',
        backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)',
      },
    })
  );

export default React.memo(NeckMarker, () => true);
