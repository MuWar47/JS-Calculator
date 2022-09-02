// finding diagonal
const side = 9;
var diagonal;

diagonal = side * (2 ** (1 / 2));
console.log(diagonal);

// finding area
const a = 5,
  b = 6,
  c = 7;
// Heron's formula
var one = a + b + c;
var two = -a + b + c;
var three = a - b + c;
var four = a + b - c;
var product = one * two * three * four;

var area = 0.25 * (product ** (1 / 2));
console.log(area);

// finding circumference & area
const radius = 4;
const pi = 3.14;

var circumference = 2 * pi * radius;
console.log(circumference);

var surface_area = pi * (radius ** 2);
console.log(surface_area);
