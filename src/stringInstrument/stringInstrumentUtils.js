import { calcRoomContainerWidth, woodNecksDesign, NECK_WIDTH, ROOMS } from '../shared/utils';

export const getNeckDesign = (name = 'wood') => {
  return woodNecksDesign[name];
};

export const calcMarkPosition = (NECK_HEIGHT) => {
  return Number(NECK_HEIGHT / 2 - (62.5 / 1000) * NECK_HEIGHT);
};

export const getRoomSizes = () => {
  return Array(ROOMS)
    .fill(0)
    .map((_, idx) => calcRoomContainerWidth(NECK_WIDTH, idx));
};
