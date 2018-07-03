/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = (min + max) >> 1;

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (arr[mid + 1] < arr[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
};
