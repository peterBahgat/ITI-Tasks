import Shape from './Shape.js';

export default class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
    Shape.count.circles++;
  }

  setArea() {
    return Math.PI * this.r ** 2;
  }

  setPerimeter() {
    return 2 * Math.PI * this.r;
  }

  toString() {
    return `circleArea is ${this.setArea()} and circlePerimeter is ${this.setPerimeter()}`;
  }
}
