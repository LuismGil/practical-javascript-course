
function calculateAverageArithmetic(list) {
  const sumList = list.reduce(
    function (accValue = 0, newElement ) {
      return accValue + newElement;
    }
  )
  
  const averageList = sumList / list.length;

  return averageList;
}