export const SET_SELECTED_CHORD = 'chordsFeature/SET_SELECTED_CHORD';

export const setSelectedChord = (dispatch, chord) => {
  dispatch({
    type: SET_SELECTED_CHORD,
    chord,
  });
};
