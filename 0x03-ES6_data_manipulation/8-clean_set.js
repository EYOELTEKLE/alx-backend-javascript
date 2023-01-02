export default function cleanSet(set, startString) {
  let result = '';
  if (startString === '') return result;
  let count = 0;
  for (const item of set) {
    if (item.indexOf(startString) !== -1) {
      if (count === 0 || count === set.size - 1)result += item.slice(startString.length);
      else {
        result = `${result}-${item.slice(startString.length)}`;
      }
    }
    count = +1;
  }
  return result;
}
