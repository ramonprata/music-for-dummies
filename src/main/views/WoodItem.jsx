import React from 'react';
import { woodNecksDesign } from '../../shared/utils';
import BoxSelectOption from '../../shared/components/BoxSelectOption';

const WoodItem = (props) => {
  const { onSelectNeck, woodName, selectedNeck } = props;
  const bkgStyle = {
    backgroundImage: `url(${woodNecksDesign[woodName]})`,
  };

  return (
    <div
      style={{
        width: 54,
        height: 54,
      }}
    >
      <BoxSelectOption
        onSelect={onSelectNeck}
        value={woodName}
        selectedOption={selectedNeck}
        bkgStyle={bkgStyle}
      />
    </div>
  );
};

export default WoodItem;
