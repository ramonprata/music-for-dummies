export const SET_SELECTED_TAB = 'panelFeature/SET_SELECTED_TAB';
export const TOGGLE_SHOW_NOTES_INSTRUMENT = 'panelFeature/TOGGLE_SHOW_NOTES_INSTRUMENT';
export const SELECT_INSTRUMENT = 'panelFeature/SELECT_INSTRUMENT';
export const SELECT_NECK_MODEL = 'panelFeature/SELECT_NECK_MODEL';
export const SET_SELECTED_NOTE = 'panelFeature/SET_SELECTED_NOTE';
export const SET_SELECTED_STRINGS_COLOR = 'panelFeature/SET_SELECTED_STRINGS_COLOR';

export const setSelectedTab = (dispatch, selectedTab) => {
  dispatch({
    type: SET_SELECTED_TAB,
    payload: selectedTab,
  });
};

export const toggleShowNotes = (dispatch) => {
  dispatch({
    type: TOGGLE_SHOW_NOTES_INSTRUMENT,
  });
};

export const selectInstrument = (dispatch, instrument) => {
  dispatch({
    type: SELECT_INSTRUMENT,
    payload: instrument,
  });
};

export const setNeckModel = (dispatch, woodNeckModel) => {
  dispatch({
    type: SELECT_NECK_MODEL,
    payload: woodNeckModel,
  });
};

export const setSelectedNote = (dispatch, keyNote) => {
  dispatch({
    type: SET_SELECTED_NOTE,
    payload: keyNote,
  });
};

export const setSelectedStringsColor = (dispatch, colorName) => {
  dispatch({
    type: SET_SELECTED_STRINGS_COLOR,
    payload: colorName,
  });
};
