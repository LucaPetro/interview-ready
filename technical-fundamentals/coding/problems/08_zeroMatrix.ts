// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
  const coords: Array<[number, number]> = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) coords.push([row, col])
    }
  }

  for (const [row, col] of coords) {
    matrix[row].fill(0)
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
}