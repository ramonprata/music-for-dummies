import React from 'react';
import { Typography } from '@material-ui/core/';
import CustomTabs from '../../shared/components/CustomTabs';
import { tabs } from '../../main/mainUtils';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { setNeckModel } from '../../panel/store';
import InstrumentConfig from '../../main/views/InstrumentConfig';
import { getNeckDesign } from '../../neck';
import { ScalesTab } from '../../scales';

const PanelConfig = () => {
  const { dispatch, selectedNeckModel } = useContextStore();
  const woodNecksDesign = getNeckDesign(selectedNeckModel);

  const mapTabs = () => {
    return tabs.map((tab) => {
      switch (tab.id) {
        case 0:
          return {
            ...tab,
            renderTab: () => (
              <InstrumentConfig
                selectedNeck={selectedNeckModel}
                woodNecksDesign={woodNecksDesign}
                onSelectNeck={(selectedModel) => {
                  setNeckModel(dispatch, selectedModel);
                }}
              />
            ),
          };

        case 1:
          return {
            ...tab,
            renderTab: () => <ScalesTab />,
          };

        default:
          return {
            ...tab,
            renderTab: () => <Typography>{tab.label}</Typography>,
          };
      }
    });
  };
  return <CustomTabs tabs={mapTabs()} />;
};

export default PanelConfig;
