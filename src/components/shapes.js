// Square code
const inputSquare = document.getElementById('squareInput');
const resultSquare = document.getElementById('squareResult');
const btnSquarePerimeter = document.getElementById('squareBtnPerimeter');
const btnSquareArea = document.getElementById('squareBtnArea');

btnSquarePerimeter.addEventListener('click',function() {
  const valueSquarePerimeter = inputSquare.value;
  const perimeterSquare = squarePerimeter(valueSquarePerimeter);

  resultSquare.innerHTML = `The Perimeter is: ${perimeterSquare}`;
})


btnSquareArea.addEventListener('click',function() {
  const valueSquareArea = inputSquare.value;
  const areaSquare = squareArea(valueSquareArea);

  resultSquare.innerHTML = `The Area is: ${areaSquare}`;
})

function squarePerimeter(side) {
  return side * 4;
} 

function squareArea(side) {
  return side * side;
}

// Triangle code
const inputA = document.getElementById('triangleA');
const inputB = document.getElementById('triangleB');
const inputBase = document.getElementById('triangleBase');
const inputHeight = document.getElementById('triangleHeight');
const resultTriangle = document.getElementById('triangleResult');
const btnTrianglePerimeter = document.getElementById('triangleBtnPerimeter');
const btnTriangleArea = document.getElementById('triangleBtnArea');


btnTrianglePerimeter.addEventListener('click', function() {
  const valueAPerimeter = parseInt(inputA.value);
  const valueBPerimeter = parseInt(inputB.value);
  const valueBasePerimeter = parseInt(inputBase.value);
  const perimeterTriangle = trianglePerimeter(valueAPerimeter, valueBPerimeter, valueBasePerimeter);

  resultTriangle.innerHTML = `The Perimeter is: ${perimeterTriangle}`;
})


btnTriangleArea.addEventListener('click', function() {
  const valueBaseArea = parseInt(inputBase.value);
  const valueHeightArea = parseInt(inputHeight.value);
  const areaTriangle = triangleArea(valueBaseArea, valueHeightArea);

  resultTriangle.innerHTML = `The Area is: ${areaTriangle}`;
})

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
};

function triangleArea(base, height) {
  return (base * height) / 2;
}

// Circle code
const PI = Math.PI;
const inputCircle = document.getElementById('inputCircle');
const resultCircle = document.getElementById('circleResult');
const btnCirclePerimeter = document.getElementById('circleBtnPerimeter');
const btnCircleArea = document.getElementById('circleBtnArea');

btnCirclePerimeter.addEventListener('click', function() {
  const valueCirclePerimeter = parseInt(inputCircle.value);
  const perimeterCircle = circlePerimeter(valueCirclePerimeter).toFixed(2);

  resultCircle.innerHTML = `The Perimeter is: ${perimeterCircle}`
})

btnCircleArea.addEventListener('click', function() {
  const valueCircleArea = parseInt(inputCircle.value);
  const areaCircle = circleArea(valueCircleArea).toFixed(2);

  resultCircle.innerHTML = `The Area is: ${areaCircle}`
})

function circleDiameter(radius) {
  return radius * 2;
}

function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * PI;
}

function circleArea(radius) {
  return (radius * radius) * PI;
}
