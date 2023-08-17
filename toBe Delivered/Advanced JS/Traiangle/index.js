function EquilateralTriangle(side, height) {
  this.side = side;
  this.height = height;
}

EquilateralTriangle.prototype.getPerimeter = function () {
  return this.side * 3;
};

EquilateralTriangle.prototype.getArea = function () {
  return 0.5 * this.side * this.height;
};

EquilateralTriangle.prototype.toString = function () {
  return `it is an Equilateral Triangle with side${this.side} and height ${
    this.height
  } which its perimeter ${this.getPerimeter()} and area ${this.getArea()}`;
};
const t1 = new EquilateralTriangle(10, 10);
console.log(t1, t1.toString());
