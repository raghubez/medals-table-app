import { MEDAL_TYPES } from "./constants";

const sort = (a, b, key) => {
  var x = a[key];
  var y = b[key];
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  }
  let keyId = MEDAL_TYPES.findIndex(type => type.key === key);
  const nextType = MEDAL_TYPES.find(type => type.id === keyId + 1);
  if (nextType) {
    return sort(a, b, nextType.key);
  }
  return 0;
};

export const sortDataOrderArray = (
  dataOrderArray,
  data,
  prop,
  key,
  reverse
) => {
  var sortOrder = 1;
  if (reverse) sortOrder = -1;
  return [
    ...dataOrderArray.sort((a, b) => {
      return sortOrder * sort(data[a][prop], data[b][prop], key);
    })
  ];
};

export const generateInitialDataOrderArray = data =>
  new Array(Object.keys(data).length).fill(0).map((_, index) => `${index}`);
