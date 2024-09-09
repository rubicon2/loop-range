function lerp(min, max, t) {
  return min + (max - min) * t;
}

function inverseLerp(min, max, value) {
  return (value - min) / (max - min);
}

function loopNumber(min, max, value) {
  // "Normalize" position for lerp so it is always between min and max,
  // and loops around by an amount proportional to how far it was beyond the range of 0 to 1.
  let t = inverseLerp(min, max, value);
  t = (1 + (t % 1)) % 1;
  return lerp(min, max, t);
}

function loopInt(min, max, value) {
  // Must round value before looping, otherwise values very near to max will
  // not get looped round to the min but then get rounded up to a number outside the range.
  return Math.round(loopNumber(min, max, Math.round(value)));
}

module.exports = {
  loopNumber,
  loopInt,
};
