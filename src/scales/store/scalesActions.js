export const SET_SELECTED_SCALE = 'scalesFeature/SET_SELECTED_SCALE';

export const setSelectedScale = (dispatch, scaleName) => {
  dispatch({
    type: SET_SELECTED_SCALE,
    payload: scaleName,
  });
};
