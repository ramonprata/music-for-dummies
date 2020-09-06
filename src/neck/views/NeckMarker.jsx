import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { MARK_FRETS_BOARD_GUITAR, MARK_FRETS_BOARD_UKE, getMarkers } from '../../shared';

const NeckMarker = (props) => {
  const { room, selectedInstrument } = props;
  const classes = useStyles(props)();
  const { marker } = classes;
  const markes = getMarkers(selectedInstrument);
  const showMarker = markes.includes(room);
  return showMarker && <div className={marker} />;
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      marker: {
        height: 24,
        width: 24,
        borderRadius: '50%',
        backgroundColor: '#2f4353',
        backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)',
      },
    })
  );

export default NeckMarker;
