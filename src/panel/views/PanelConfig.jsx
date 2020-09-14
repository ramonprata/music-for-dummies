import React from 'react';
import { Typography } from '@material-ui/core/';
import CustomTabs from '../../shared/components/CustomTabs';
import { tabs } from '../../main/mainUtils';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { setNeckModel } from '../../panel/store';
import InstrumentTab from './InstrumentTab';
import { getNeckDesign } from '../../neck';
import { ScalesTab } from '../../scales';
import { setSelectedNote } from '../store';
import { ChordsTab } from '../../chords/views';
import DefaultTab from './DefaultTab';

const PanelConfig = () => {
  const { dispatch, selectedNeckModel, selectedNote } = useContextStore();

  const onChangeNote = (e) => {
    setSelectedNote(dispatch, e.target.value);
  };

  const woodNecksDesign = getNeckDesign(selectedNeckModel);
  const mapTabs = () => {
    return tabs.map((tab) => {
      switch (tab.id) {
        case 0:
          return {
            ...tab,
            renderTab: () => (
              <InstrumentTab
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
            renderTab: () => (
              <DefaultTab onSelectNote={onChangeNote} selectedNote={selectedNote}>
                <ScalesTab selectedNote={selectedNote} />
              </DefaultTab>
            ),
          };

        default:
          return {
            ...tab,
            renderTab: () => (
              <DefaultTab onSelectNote={onChangeNote} selectedNote={selectedNote}>
                <ChordsTab />,
              </DefaultTab>
            ),
          };
      }
    });
  };
  return <CustomTabs tabs={mapTabs()} />;
};

export default PanelConfig;
