// Square code

function squarePerimeter(side) {
  return side * 4;
} 

function squareArea(side) {
  return side * side;
}

// Triangle code

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
};

function triangleArea(base, height) {
  return (base * height) / 2;
}

// Circle code
const PI = Math.PI;

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
