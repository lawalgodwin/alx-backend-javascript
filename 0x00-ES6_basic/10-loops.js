export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const item of array) {
    const value = appendString + item;
    newArray.push(value);
  }

  return newArray;
}
