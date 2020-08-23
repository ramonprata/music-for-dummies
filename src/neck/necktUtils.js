import { woodNecksDesign } from '../shared';

export const getNeckDesign = (name = 'wood') => {
  return woodNecksDesign[name];
};
