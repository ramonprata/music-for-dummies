import React, { useCallback } from 'react';
import CustomTabs from '../../shared/components/CustomTabs';
import { tabs } from '../panelUtils';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { setNeckModel } from '../../panel/store';
import InstrumentTab from './InstrumentTab';
import { getNeckDesign } from '../../neck';
import { ScalesTab } from '../../scales';
import { setSelectedNote, setSelectedTab } from '../store';
import { ChordsTab } from '../../chords/views';
import DefaultTab from './DefaultTab';

const PanelConfig = () => {
  const { dispatch, selectedNeckModel, selectedNote, selectedTab } = useContextStore();

  const onChangeNote = useCallback(
    (e) => {
      setSelectedNote(dispatch, e.target.value);
    },
    [dispatch]
  );

  const handleSelectTab = (value) => {
    if (selectedTab !== value) {
      setSelectedTab(dispatch, value);
    }
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
                <ChordsTab selectedNote={selectedNote} />,
              </DefaultTab>
            ),
          };
      }
    });
  };
  return <CustomTabs tabs={mapTabs()} selected={selectedTab} handleSelectTab={handleSelectTab} />;
};

export default PanelConfig;
