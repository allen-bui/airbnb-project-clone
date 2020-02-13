export function randomize(arr, count) {
  const result = [arr[0]];
  const copyArr = arr.slice(1);
  let i = 0;
  let int;

  while (i < count) {
    int = Math.floor(Math.random() * copyArr.length);
    result.push(copyArr[int]);
    copyArr.splice(int, 1);
    i++;
  }
  return result;
}
