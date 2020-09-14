import React from 'react';
import PropTypes from 'prop-types';
import { useContextStore } from '../../shared/hooks';
import { ListItemDescription } from '../../shared/components/';

const Scale = (props) => {
  const { scaleOption, scaleLabel, scaleKey, onSelectScale } = props;
  const { scaleName } = useContextStore();
  const active = scaleKey === scaleName;

  return (
    <ListItemDescription
      notation={scaleLabel}
      notes={scaleOption.scale}
      enharmonicNotes={scaleOption.enharmonicScale}
      onSelectItem={onSelectScale}
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
