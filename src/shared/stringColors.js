export const stringsColors = {
  color1: {
    backgroundColor: 'rgba(109,73,23,1)',
  },
  color3: {
    backgroundColor: 'rgba(89, 56, 56, 1)',
  },
};

export const getStringsColor = (colorName = 'color1') => {
  return stringsColors[colorName];
};
