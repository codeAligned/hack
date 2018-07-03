/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    const rowLen = A[0].length;

    for (let j = 0; j < rowLen >> 1; j++) {
      const tmp = +!A[i][j];
      A[i][j] = +!A[i][rowLen - j - 1];
      A[i][rowLen - j - 1] = tmp;
    }

    if (rowLen & 1) {
      A[i][rowLen >> 1] = +!A[i][rowLen >> 1];
    }
  }

  return A;
};
