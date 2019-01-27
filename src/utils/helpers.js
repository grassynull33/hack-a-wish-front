export const truncateDecimal = (num, dec = 2) => {
  const calcDec = 10 ** dec;

  return Math.trunc(num * calcDec) / calcDec;
};
