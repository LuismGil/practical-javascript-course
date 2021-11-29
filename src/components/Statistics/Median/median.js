
function calculateAverageArithmetic(list) {
  const sumList = list.reduce(
    function (accValue = 0, newElement ) {
      return accValue + newElement;
    }
  )
  
  const averageList = sumList / list.length;

  return averageList;
}

const list1 = [
  100, 
  200,
  500,
  40000,
  150
];

list1.sort((a,b) => a - b);
// console.log(list1);

const middleList1 = parseInt(list1.length / 2);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let median;

if (isEven(list1.length)) {
  const element1 = list1[middleList1 - 1];
  const element2 = list1[middleList1];

  const averageElement1And2 = calculateAverageArithmetic([
    element1,
    element2
  ]);

  median = averageElement1And2;
} else {
  median = list1[middleList1];
}