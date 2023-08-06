export const formatStarsToK = (number: number) => {
  if (number >= 1000) {
    const thousand = Math.floor(number / 1000);
    const remaining = number % 1000;
    const decimalPart = remaining >= 100 ? `.${Math.floor(remaining / 100)}` : '';

    return `${thousand}${decimalPart}k`;
  }

  return number.toString();
};
