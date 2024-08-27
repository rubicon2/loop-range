const { loopNumber, loopInt } = require('./index');

const withinRangePosTests = [
  [0, 5, 0, 0],
  [0, 5, 4, 4],
  [0, 5, 1, 1],
  [5, 15, 5, 5],
  [5, 15, 14, 14],
  [5, 15, 5, 5],
  [5, 15, 6, 6],
  [5, 20, 6, 6],
  [5, 20, 9, 9],
];

const withinRangeNegTests = [
  [-5, 0, -5, -5],
  [-5, 0, -1, -1],
  [-5, 5, -5, -5],
  [-5, 5, 1, 1],
  [-5, 10, 1, 1],
  [-5, 10, 9, 9],
  [-10, 0, -5, -5],
  [-10, 0, -1, -1],
  [-10, 5, -5, -5],
  [-10, 5, 1, 1],
  [-10, 10, 1, 1],
  [-10, 10, 9, 9],
  [-10, 5, 2, 2],
];

const minPosTests = [
  [0, 5, 5, 0],
  [0, 10, 10, 0],
  [0, 15, 15, 0],
  [5, 10, 10, 5],
  [5, 15, 15, 5],
  [5, 15, 15, 5],
  [0, 5, 20, 0],
  [5, 10, 20, 5],
];

const minNegTests = [
  [-5, 0, 0, -5],
  [-5, 5, 5, -5],
  [-5, 10, 10, -5],
  [-10, 10, 10, -10],
  [-10, 15, 15, -10],
  [-10, 15, 15, -10],
  [-10, 0, 10, -10],
  [-10, 10, 90, -10],
];

const overRangePosTests = [
  [0, 5, 6, 1],
  [0, 10, 11, 1],
  [0, 5, 8, 3],
  [0, 10, 13, 3],
  [5, 10, 11, 6],
  [5, 10, 13, 8],
];

const underRangePosTests = [
  [0, 5, -1, 4],
  [0, 10, -1, 9],
  [5, 10, 4, 9],
  [0, 5, -3, 2],
  [0, 10, -13, 7],
];

const overRangeNegTests = [
  [-5, 0, 1, -4],
  [-5, 5, 6, -4],
  [-5, 0, 3, -2],
  [-5, 10, 11, -4],
  [-10, 10, 13, -7],
  [-10, 10, 15, -5],
];

const underRangeNegTests = [
  [-5, 0, -6, -1],
  [-5, 5, -6, 4],
  [-5, 0, -8, -3],
  [-5, 10, -6, 9],
  [-10, 10, -13, 7],
  [-10, 10, -15, 5],
];

describe('loopInt', () => {
  test.each(withinRangePosTests)(
    'returns unchanged value if within positive range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(withinRangeNegTests)(
    'returns unchanged value if within negative range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(minPosTests)(
    'rolls over to min value correctly across a positive range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(minNegTests)(
    'rolls over to min value correctly across a negative range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(overRangePosTests)(
    'returns correct value if over max value of positive range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(underRangePosTests)(
    'returns correct value if under min value of positive range - min %p, max %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(overRangeNegTests)(
    'returns correct value if over max value of negative range - min %p, max %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );

  test.each(underRangeNegTests)(
    'returns correct value if under max value of negative range - min %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopInt(min, max, value)).toBe(expected);
    },
  );
});

describe('loopNumber', () => {
  test.each([
    ...withinRangePosTests,
    [0, 5, 2.5, 2.5],
    [5.5, 20.9, 12.5, 12.5],
  ])(
    'returns unchanged value if within positive range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([
    ...withinRangeNegTests,
    [-5, 5, -2.5, -2.5],
    [-5.5, 20.9, -3.14, -3.14],
  ])(
    'returns unchanged value if within negative range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([...minPosTests, [0, 5.5, 5.5, 0], [5.5, 20.9, 20.9, 5.5]])(
    'rolls over to min value correctly across a positive range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([...minNegTests, [-5, 5, 5, -5], [-5.5, 20.9, 20.9, -5.5]])(
    'rolls over to min value correctly across a negative range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([...overRangePosTests, [0, 5, 7.2, 2.2], [5.5, 20.9, 21.5, 6.1]])(
    'returns correct value if over max value of positive range - min: %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([...overRangePosTests, [0, 5, -2.2, 2.8], [5.5, 20.9, -1.2, 14.2]])(
    'returns correct value if under min value of positive range - min %p, max %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([
    ...overRangeNegTests,
    [-5, 5, 7.5, -2.5],
    [-5.5, 20.9, 22.1, -4.3],
  ])(
    'returns correct value if over max value of negative range - min %p, max %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );

  test.each([
    ...underRangeNegTests,
    [-5, 5, -7.5, 2.5],
    [-5.5, 20.9, -6, 20.4],
  ])(
    'returns correct value if under max value of negative range - min %p, max: %p, value: %p, result: %p',
    (min, max, value, expected) => {
      expect(loopNumber(min, max, value)).toBeCloseTo(expected);
    },
  );
});
