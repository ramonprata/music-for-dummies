import React, { useCallback } from 'react';
import CustomTabs from '../../shared/components/CustomTabs';
import { tabs } from '../panelUtils';
import { useContextStore } from '../../shared/hooks/useContextStore';
import { setNeckModel } from '../../panel/store';
import { getNeckDesign } from '../../neck';
import { setSelectedNote, setSelectedTab } from '../store';
import DefaultTab from './DefaultTab';

const InstrumentTab = React.lazy(() => import('./InstrumentTab'));
const ScalesTab = React.lazy(() => import('../../scales/views/ScalesTab'));
const ChordsTab = React.lazy(() => import('../../chords/views/ChordsTab'));

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

  const renderInstrumentTab = () => {
    return (
      <InstrumentTab
        selectedNeck={selectedNeckModel}
        woodNecksDesign={woodNecksDesign}
        onSelectNeck={(selectedModel) => {
          setNeckModel(dispatch, selectedModel);
        }}
      />
    );
  };

  const renderScalesTab = () => {
    return (
      <DefaultTab onSelectNote={onChangeNote} selectedNote={selectedNote}>
        <ScalesTab selectedNote={selectedNote} />
      </DefaultTab>
    );
  };

  const renderChordsTab = () => {
    return (
      <DefaultTab onSelectNote={onChangeNote} selectedNote={selectedNote}>
        <ChordsTab selectedNote={selectedNote} />,
      </DefaultTab>
    );
  };

  const woodNecksDesign = getNeckDesign(selectedNeckModel);
  const mapTabs = () => {
    return tabs.map((tab) => {
      switch (tab.id) {
        case 0:
          return {
            ...tab,
            renderTab: () => renderInstrumentTab(),
          };

        case 1:
          return {
            ...tab,
            renderTab: () => renderScalesTab(),
          };

        default:
          return {
            ...tab,
            renderTab: () => renderChordsTab(),
          };
      }
    });
  };
  return (
    <CustomTabs
      tabs={mapTabs()}
      selected={selectedTab}
      handleSelectTab={handleSelectTab}
      lazyLoading
    />
  );
};

export default PanelConfig;
