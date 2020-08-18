import React from 'react';
import { Paper, Typography } from '@material-ui/core/';
import CustomTabs from '../../shared/components/CustomTabs';
import { tabs } from '../mainUtils';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { setNeckModel } from '../store/mainActions';
import InstrumentConfig from './InstrumentConfig';
import { getNeckDesign } from '../../stringInstrument/stringInstrumentUtils';

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

        default:
          return {
            ...tab,
            renderTab: () => <Typography>{tab.label}</Typography>,
          };
      }
    });
  };
  return (
    <Paper square elevation={2}>
      <CustomTabs tabs={mapTabs()} />
    </Paper>
  );
};

export default PanelConfig;
