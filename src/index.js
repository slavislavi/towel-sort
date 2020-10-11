
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix == null || matrix == 'undefined') {
    return [];
  };

    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (matrix.indexOf(matrix[i]) % 2 !== 0) {
            result.push(matrix[i].reverse());
        } else {
          result.push(matrix[i]);
        };
    };
   
  return result.reduce((res, el) => res.concat(el), []);

};
