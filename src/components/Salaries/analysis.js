const salariesCol = colombia.map(
  function (person) {
    return person.salary;
  }
);

const salariesColSorted = salariesCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const medianGeneralCol = medianSalaries(salariesColSorted);

// Helpers
function isOdd(number) {
  return (number % 2 === 0);
}

function calculateAverageArithmetic(list) {
  const sumList = list.reduce(
    function (accValue = 0, newElement) {
      return accValue + newElement;
    }
  )
  const averageList = sumList / list.length;
  return averageList;
}

function medianSalaries(list) {
  const middle = parseInt(list.length / 2);

  if (isOdd(list.length)) {
    const middlePerson1 = list[middle - 1];
    const middlePerson2 = list[middle];

    const median = calculateAverageArithmetic([middlePerson1, middlePerson2])
    return median;

  } else {
    const middlePerson = list[middle];
    return middlePerson;
  }
}

console.log(
  medianSalaries(salariesColSorted)
);

// Mediana del top 10%
const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount = salariesColSorted.length - spliceStart;

const salariesColTop10 = salariesColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianTop10Col = medianSalaries(salariesColTop10);

console.log({
  medianGeneralCol,
  medianTop10Col,
});
