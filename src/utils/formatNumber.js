export const formatNumber = number => {
  const formattedNumber = String(number).padStart(7, '0');
  const firstPart = formattedNumber.slice(0, 3);
  const secondPart = formattedNumber.slice(3, 5);
  const thirdPart = formattedNumber.slice(5);
  return `${firstPart}-${secondPart}-${thirdPart}`;
};
