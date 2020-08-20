import { majorScales, minorScales } from './mocks/scales.mock';
import { getMajorScale, getMinorScale } from '../scales';
describe('Test major scales', () => {
  it('Should return a C major scale ', () => {
    const mockScale = majorScales['C'];
    const CMajorScale = getMajorScale('C');
    expect(CMajorScale).toEqual(mockScale);
  });

  it('Should return a D major scale ', () => {
    const mockScale = majorScales['D'];
    const DMajorScale = getMajorScale('D');
    expect(DMajorScale).toEqual(mockScale);
  });

  it('Should return a D# major scale ', () => {
    const mockScale = majorScales['D#'];
    const DSharpMajorScale = getMajorScale('D#');
    expect(DSharpMajorScale).toEqual(mockScale);
  });
  it('Should return a B major scale ', () => {
    const mockScale = majorScales['B'];
    const BMajorScale = getMajorScale('B');
    expect(BMajorScale).toEqual(mockScale);
  });
});

describe('Test minor scales', () => {
  it('Should return C minor scale ', () => {
    const mockScale = minorScales['C'];
    const CMinorScale = getMinorScale('C');
    expect(CMinorScale).toEqual(mockScale);
  });

  it('Should return F minor scale ', () => {
    const mockScale = minorScales['F'];
    const FMinorScale = getMinorScale('F');
    expect(FMinorScale).toEqual(mockScale);
  });

  it('Should return B minor scale ', () => {
    const mockScale = minorScales['B'];
    const BMinorScale = getMinorScale('B');
    expect(BMinorScale).toEqual(mockScale);
  });

  it('Should return G# minor scale ', () => {
    const mockScale = minorScales['G#'];
    const GSharpMinorScale = getMinorScale('G#');
    expect(GSharpMinorScale).toEqual(mockScale);
  });
});
