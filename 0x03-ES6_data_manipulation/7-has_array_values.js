export default function hasValuesFromArray(set, array) {
  let result = true;
  for (const element of array) {
    if (!set.has(element)) {
      result = false;
    }
  }
  return result;
}
