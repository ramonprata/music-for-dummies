import React from 'react';
import PropTypes from 'prop-types';
import { useContextStore } from '../../shared/hooks';
import { ListItemDescription } from '../../shared/components/';
import { mapNotesColors } from '../../shared';
import { setSelectedScale } from '../store';
import { useCallback } from 'react';

const Scale = (props) => {
  const { scaleOption, scaleLabel, scaleKey } = props;
  const { scaleName, dispatch } = useContextStore();
  const active = scaleKey === scaleName;
  const mappedNotesColors = mapNotesColors(scaleOption.scale, true);

  const onSelectScale = useCallback(() => setSelectedScale(dispatch, scaleKey), [
    dispatch,
    scaleKey,
  ]);

  return (
    <ListItemDescription
      type="scale"
      notation={scaleLabel}
      notes={mappedNotesColors}
      subDescription={scaleOption.enharmonicScale.join(', ')}
      onSelectItem={onSelectScale}
      subNotation="Enharmonic"
      active={active}
    />
  );
};

Scale.propTypes = {
  scaleOption: PropTypes.shape({
    scale: PropTypes.arrayOf(PropTypes.string),
  }),
  scaleLabel: PropTypes.string.isRequired,
  scaleKey: PropTypes.string.isRequired,
  enharmonicScale: PropTypes.arrayOf(PropTypes.string),
  onSelectScale: PropTypes.func.isRequired,
};

export default Scale;
