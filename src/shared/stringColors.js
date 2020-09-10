export const stringsColors = {
  color1: {
    backgroundColor: '#8a8361',
  },
  color2: {
    backgroundColor: '#8f192a',
  },
  color3: {
    backgroundColor: '#9fa1a1',
  },
};

export const getStringsColor = (colorName = 'color1') => {
  return stringsColors[colorName];
};
