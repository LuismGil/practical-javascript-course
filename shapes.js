// Square code
console.group('Squares');

const squareSide = 5;
console.log('The sides of the square measure: ' + squareSide + 'cm');

const squarePerimeter = squareSide * 4;
console.log('The perimetes of the square is: ' + squarePerimeter + 'cm');

const squareArea = squareSide * squareSide;
console.log('The area of the square is: ' + squareArea + 'cm^2');

console.groupEnd();

// Triangle code
console.group('Triangles');

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;

console.log(
  'The sides of the triangle measure: '
  + triangleSide1
  + 'cm, '
  + triangleSide2
  + 'cm, '
  + triangleBase
  + 'cm'
);

const triangleHeight = 5.5;
console.log('The height of triangle is: ' + triangleHeight + 'cm');

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log('The perimeter of the triangle is: ' + trianglePerimeter + 'cm');

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log('The area of the triangle is: ' + triangleArea + 'cm^2');

console.groupEnd();

// Circle code

console.group('Circles');

const circleRadius = 4;
console.log('The radius of the circle is: ' + circleRadius + 'cm');

const circleDiameter = circleRadius * 2;
console.log('The diameter of the circle is: ' + circleDiameter + 'cm');

const PI = Math.PI;
console.log('PI is: ' + PI);

const circlePerimeter = circleDiameter * PI;
console.log('The perimeter of the circle is: ' + circlePerimeter + 'cm');

const circleArea = (circleRadius * circleRadius) * PI;
console.log('The area of the circle is: ' + circleArea + 'cm^2');

console.groupEnd();