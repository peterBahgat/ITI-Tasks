import Shape from './Shape.js';

export default class Square extends Shape {
  constructor(side) {
    super();
    Shape.count.squares++;
    this.side = side;
  }

  setArea() {
    return this.side ** 2;
  }

  setPerimeter() {
    return 4 * this.side;
  }

  toString() {
    return `squareArea is ${this.setArea()} and squarePerimeter is ${this.setPerimeter()}`;
  }
}
