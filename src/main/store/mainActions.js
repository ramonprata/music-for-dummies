export const TOGGLE_SHOW_NOTES_INSTRUMENT = 'mainFeature/TOGGLE_SHOW_NOTES_INSTRUMENT';
export const SELECT_INSTRUMENT = 'mainFeature/SELECT_INSTRUMENT';
export const SELECT_NECK_MODEL = 'mainFeature/SELECT_NECK_MODEL';

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
