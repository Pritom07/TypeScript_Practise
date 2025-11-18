type paramType = number | string | boolean;
const formatValue = (value: paramType): paramType => {
  if (typeof value === "string") return value.toUpperCase();
  else if (typeof value === "number") return value * 10;
  else return !value;
};
