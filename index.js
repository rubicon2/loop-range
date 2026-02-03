/**
 * @param {number} max
 * @param {number} min
 * @param {number} t
 */
function lerp(min, max, t) {
  return min + (max - min) * t;
}

/**
 * @param {number} max
 * @param {number} min
 * @param {number} value
 */
function inverseLerp(min, max, value) {
  return (value - min) / (max - min);
}

/**
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number} The value looped over the min/max range. E.g. with a min of -1 and a max of 1, and a value of 1.5, this will return -0.5.
 */
function loopNumber(min, max, value) {
  // "Normalize" position for lerp so it is always between min and max,
  // and loops around by an amount proportional to how far it was beyond the range of 0 to 1.
  let t = inverseLerp(min, max, value);
  t = (1 + (t % 1)) % 1;
  return lerp(min, max, t);
}

/**
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number} The value looped over the min/max range and returned as an integer. Ideal for repeatedly looping through arrays.
 */
function loopInt(min, max, value) {
  // Must round value before looping, otherwise values very near to max will
  // not get looped round to the min but then get rounded up to a number outside the range.
  return Math.round(loopNumber(min, max, Math.round(value)));
}

module.exports = {
  loopNumber,
  loopInt,
};
