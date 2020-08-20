import React from 'react';
import { Paper, Typography } from '@material-ui/core/';
import CustomTabs from '../../shared/components/CustomTabs';
import { tabs } from '../mainUtils';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { setNeckModel } from '../store/mainActions';
import InstrumentConfig from './InstrumentConfig';
import { getNeckDesign } from '../../stringInstrument/stringInstrumentUtils';
import ScalesTab from './ScalesTab';

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
                onSelectNeck={(selectedModel) => setNeckModel(dispatch, selectedModel)}
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
