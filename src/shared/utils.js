const wood = require('../images/wood.jpg');
const wood1 = require('../images/wood1.jpg');
const wood2 = require('../images/wood2.jpg');
const wood3 = require('../images/wood3.jpg');
const wood4 = require('../images/wood4.jpg');
const wood5 = require('../images/wood5.jpg');
const wood6 = require('../images/wood6.jpg');
const wood7 = require('../images/wood7.jpg');
const wood8 = require('../images/wood8.jpg');
const wood9 = require('../images/wood9.jpg');
const wood10 = require('../images/wood10.jpg');

export const NECK_WIDTH = window.innerWidth * 0.9;
export const NECK_HEIGHT = 160;
export const markRooms = [12, 10, 8, 3];
export const ROOMS = 15;

const MAX_ROOM_WIDTH = 52 + ROOMS * (NECK_WIDTH * (25 / 10000));

export const calcRoomContainerWidth = (NECK_WIDTH = window.innerWidth, idx = 0) => {
  return Number(MAX_ROOM_WIDTH - idx * (NECK_WIDTH * (25 / 10000)));
};

export const woodNecksDesign = {
  wood: wood,

  wood1: wood1,

  wood2: wood2,

  wood3: wood3,

  wood4: wood4,

  wood5: wood5,

  wood6: wood6,

  wood7: wood7,

  wood8: wood8,

  wood9: wood9,

  wood10: wood10,
};
