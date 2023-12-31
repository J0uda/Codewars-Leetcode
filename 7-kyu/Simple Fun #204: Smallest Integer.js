/**
 * Task
You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.

Input/Output
[input] 2D integer array matrix
A non-empty rectangular matrix.

1 ≤ matrix.length ≤ 10

1 ≤ matrix[0].length ≤ 10

[output] an integer
The smallest non-negative integer that is not present in matrix.

Example
For

  matrix = [  [0, 2],  [5, 1]] the result should be 3

0,1,2,(3)...5
 */

function smallestInteger(matrix) {
  let array = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      array.push(matrix[i][j]);
    }
  }
  let i = 0;
  while (true) {
    if (!array.includes(i)) return i;
    i++;
  }
}
