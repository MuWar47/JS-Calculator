// finding diagonal
const side = 9;
var diagonal;

diagonal = side * (2 ** (1 / 2));
var str1 = "Diagonal is " + diagonal + " for a square with sides 9.";
console.log(str1);

// finding area
const a = 5,
  b = 6,
  c = 7;
var one = a + b + c;
var two = -a + b + c;
var three = a - b + c;
var four = a + b - c;
var product = one * two * three * four;

var area = 0.25 * (product ** (1 / 2));
var str2 = "Area is " + area + " for a triangle with sides 5, 6 and 7.";
console.log(str2);

// finding circumference & area
const radius = 4;

var circumference = 2 * Math.PI * radius;
var str3 = "Circumference is " + circumference + " for a circle of radius 4.";
console.log(str3);

var surface_area = Math.PI * (radius ** 2);
var str4 = "Surface Area is " + surface_area + " for a circle of radius 4.";
console.log(str4);
