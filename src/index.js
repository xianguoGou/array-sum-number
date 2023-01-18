export default function (array) {
  return array.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);
}
