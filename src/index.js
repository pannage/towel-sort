
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let concatMatrix = []
  if (matrix != undefined && matrix.length >0) {

    for (let i = 0; i < matrix.length; i++) {

      if (i % 2 > 0) {
        concatMatrix = concatMatrix.concat(matrix[i].reverse())
      } else {
        concatMatrix = concatMatrix.concat(matrix[i]);
      }


    }
  }
  return concatMatrix
}