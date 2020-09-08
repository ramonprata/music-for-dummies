import { getMajorScale, getMinorScale, getMajorPentatonic } from '../scales';

describe('Test major scales', () => {
  it('Should return a C major scale ', () => {
    const mockScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const CMajorScale = getMajorScale('C').enharmonicScale;
    expect(CMajorScale).toEqual(mockScale);
  });

  it('Should return a D major scale ', () => {
    const mockScale = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
    const DMajorScale = getMajorScale('D').enharmonicScale;
    expect(DMajorScale).toEqual(mockScale);
  });

  it('Should return a D# major scale ', () => {
    const mockScale = ['D#', 'E#', 'F##', 'G#', 'A#', 'B#', 'C##'];
    const DSharpMajorScale = getMajorScale('D#').enharmonicScale;
    expect(DSharpMajorScale).toEqual(mockScale);
  });

  it('Should return a B major scale ', () => {
    const mockScale = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];
    const BMajorScale = getMajorScale('B').enharmonicScale;
    expect(BMajorScale).toEqual(mockScale);
  });
});

describe('Test minor scales', () => {
  it('Should return C minor scale ', () => {
    const mockScale = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'];
    const CMinorScale = getMinorScale('C').enharmonicScale;
    expect(CMinorScale).toEqual(mockScale);
  });
  it('Should return F minor scale ', () => {
    const mockScale = ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
    const FMinorScale = getMinorScale('F').enharmonicScale;
    expect(FMinorScale).toEqual(mockScale);
  });
  it('Should return B minor scale ', () => {
    const mockScale = ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'];
    const BMinorScale = getMinorScale('B').enharmonicScale;
    expect(BMinorScale).toEqual(mockScale);
  });
  it('Should return G# minor scale ', () => {
    const mockScale = ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'];
    const GSharpMinorScale = getMinorScale('G#').enharmonicScale;
    expect(GSharpMinorScale).toEqual(mockScale);
  });
});

describe('Test major pentatonic scales', () => {
  it('Should return C major pentatonic scale ', () => {
    const mockScale = ['C', 'D', 'E', 'G', 'A'];
    const CMajorPentatonic = getMajorPentatonic('C').scale;
    expect(CMajorPentatonic).toEqual(mockScale);
  });

  it('Should return D# major pentatonic scale ', () => {
    const mockScale = ['D#', 'F', 'G', 'A#', 'C'];
    const DSharpPentatonic = getMajorPentatonic('D#').scale;
    expect(DSharpPentatonic).toEqual(mockScale);
  });

  it('Should return E major pentatonic scale ', () => {
    const mockScale = ['E', 'F#', 'G#', 'B', 'C#'];
    const EMajorPentatonic = getMajorPentatonic('E').scale;
    expect(EMajorPentatonic).toEqual(mockScale);
  });

  it('Should return B major pentatonic scale ', () => {
    const mockScale = ['B', 'C#', 'D#', 'F#', 'G#'];
    const BMajorPentatonic = getMajorPentatonic('B').scale;
    expect(BMajorPentatonic).toEqual(mockScale);
  });
});
