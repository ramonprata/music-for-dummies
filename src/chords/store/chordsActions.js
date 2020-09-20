export const SET_SELECTED_CHORD = 'chordsFeature/SET_SELECTED_CHORD';

export const setSelectedChord = (dispatch, selectedChord) => {
  dispatch({
    type: SET_SELECTED_CHORD,
    payload: selectedChord,
  });
};
