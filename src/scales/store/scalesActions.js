export const SET_SELECTED_SCALE = 'scalesFeature/SET_SELECTED_SCALE';
export const SET_SELECTED_NOTE = 'scalesFeature/SET_SELECTED_NOTE';

export const setSelectedScale = (dispatch, scaleName) => {
  dispatch({
    type: SET_SELECTED_SCALE,
    payload: scaleName,
  });
};

export const setSelectedNote = (dispatch, keyNote) => {
  dispatch({
    type: SET_SELECTED_NOTE,
    payload: keyNote,
  });
};
