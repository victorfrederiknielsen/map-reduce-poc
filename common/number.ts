export const isBetweenDateStrings = (
  lowNumber: string,
  highNumber: string,
  value: string
) => {
  const numberValue = Number.parseInt(value);
  return (
    numberValue >= Number.parseInt(lowNumber) &&
    numberValue <= Number.parseInt(highNumber)
  );
};
