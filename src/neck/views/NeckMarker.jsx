import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { getMarkers, isGuitarSelected } from '../../shared';

const NeckMarker = (props) => {
  const { room, selectedInstrument } = props;
  const isGuitar = isGuitarSelected(selectedInstrument);
  const classes = useStyles(isGuitar);
  const { marker } = classes;
  const markes = getMarkers(selectedInstrument);
  const showMarker = markes.includes(room);
  return showMarker && <div className={marker} />;
};

const useStyles = makeStyles({
  marker: (isGuitar) => ({
    height: isGuitar ? 24 : 20,
    width: isGuitar ? 24 : 20,
    borderRadius: '50%',
    backgroundColor: '#d3d3d3',
    backgroundImage: 'linear-gradient(315deg, #d3d3d3 0%,#7f8c8d 100%)',
  }),
});

export default NeckMarker;
