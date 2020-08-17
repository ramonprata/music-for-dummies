import { mainReducer, mainInitState } from '../../main/store';

export const reducers = {
  mainFeature: {
    reducer: mainReducer,
    initialState: mainInitState,
  },
};
