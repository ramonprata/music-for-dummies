export const SET_SCALE = 'scalesFeature/SET_SCALE';
export const SET_SELECTED_NOTE = 'scalesFeature/SET_SELECTED_NOTE';

export const setScale = (dispatch, scaleName) => {
  dispatch({
    type: SET_SCALE,
    payload: scaleName,
  });
};

export const setSelectedNote = (dispatch, keyNote) => {
  dispatch({
    type: SET_SELECTED_NOTE,
    payload: keyNote,
  });
};
