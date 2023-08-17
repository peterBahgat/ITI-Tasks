function Shape() {}

Shape.prototype.setArea = function () {
  throw new Error(`You don't choose a shape`);
};

Shape.prototype.setPerimeter = function () {
  throw new Error(`You don't choose a shape`);
};

Shape.count = {
  circles: 0,
  squares: 0,
  triangles: 0,
  toString: function () {
    return `Circles: ${Shape.count.circles}, Triangles: ${Shape.count.triangles}, Squares: ${Shape.count.squares}`;
  },
};

function Circle(r) {
  Shape.call(this);
  this.r = r;
  Shape.count.circles++;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setArea = function () {
  return Math.PI * this.r ** 2;
};

Circle.prototype.setPerimeter = function () {
  return 2 * Math.PI * this.r;
};

Circle.prototype.toString = function () {
  return `circleArea is ${this.setArea()} and circlePerimeter is ${this.setPerimeter()}`;
};

function Square(side) {
  Shape.count.squares++;
  Shape.call(this);
  this.side = side;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.setArea = function () {
  return this.side ** 2;
};

Square.prototype.setPerimeter = function () {
  return 4 * this.side;
};

Square.prototype.toString = function () {
  return `squareArea is ${this.setArea()} and squarePerimeter is ${this.setPerimeter()}`;
};

function Triangle(base, height) {
  Shape.call(this);
  this.base = base;
  this.height = height;
  Shape.count.triangles++;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setArea = function () {
  return 0.5 * this.base * this.height;
};

Triangle.prototype.setPerimeter = function () {
  // Implementation for perimeter depend on the type of triangle
};

Triangle.prototype.toString = function () {
  return `triangleArea is ${this.setArea()} and trianglePerimeter is ${this.setPerimeter()}`;
};

const c1 = new Circle(4);
const c2 = new Circle(4);
const c3 = new Circle(4);
const c4 = new Circle(4);
const t1 = new Triangle(11, 1);
const s1 = new Square(4);
const s2 = new Square(4);
const s3 = new Square(4);
const s4 = new Square(4);
const s5 = new Square(4);
console.log(Shape.count.toString());
console.log(s1.toString());
