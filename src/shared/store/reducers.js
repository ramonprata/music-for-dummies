import { panelReducer, panelInitialState } from '../../panel/store';
import { scalesReducer, scalesInitialState } from '../../scales/store';

export const reducers = {
  panelFeature: {
    reducer: panelReducer,
    initialState: panelInitialState,
  },
  scalesFeature: {
    reducer: scalesReducer,
    initialState: scalesInitialState,
  },
};
