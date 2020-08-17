import { ROOMS, MAX_ROOM_WIDTH, INSTRUMENTS } from './defaultValues';

const wood = require('../images/wood.jpg');
const wood3 = require('../images/wood3.jpg');
const wood5 = require('../images/wood5.jpg');
const wood7 = require('../images/wood7.jpg');
const wood8 = require('../images/wood8.jpg');
const wood9 = require('../images/wood9.jpg');
const wood10 = require('../images/wood10.jpg');

export const NECK_WIDTH = (() => {
  return Array(ROOMS)
    .fill(0)
    .reduce((a, c, idx) => {
      return (a += Number(MAX_ROOM_WIDTH - idx * 4.5));
    });
})();

export const calcGridNoteWidth = (idx = 0) => {
  return Number(MAX_ROOM_WIDTH - idx * 5.5);
};

export const getInstrumentStrings = (instrument) => {
  return INSTRUMENTS[instrument].strings;
};

export const woodNecksDesign = {
  wood: wood,

  wood3: wood3,

  wood5: wood5,

  wood7: wood7,

  wood8: wood8,

  wood9: wood9,

  wood10: wood10,
};

export const woodNames = ['wood', 'wood3', 'wood5', 'wood7', 'wood8', 'wood9', 'wood10'];
