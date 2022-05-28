function truncated(num, zeros) {
  const multiplier = 10 ** zeros;
  return Math.trunc(Math.round(num * multiplier)) / multiplier;
}

export default truncated;
