// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

export default function rotateMatrix (matrix: Matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0 + row; col < matrix.length; col++) {
      const temp = matrix[row][col]
      matrix[row][col] = matrix[col][row]
      matrix[col][row] = temp
    }
    matrix[row].reverse()
  }
  for (const row of matrix) {
    console.log(row)
  }
}

// // 7 4 1
// // 8 5 2
// // 3 6 9
// rotateMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ])