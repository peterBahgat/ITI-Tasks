import Shape from './Shape.js';

export default class Triangle extends Shape {
  constructor(base, height) {
    super();
    Shape.count.triangles++;
    this.base = base;
    this.height = height;
  }

  setArea() {
    return 0.5 * this.base * this.height;
  }

  setPerimeter() {
    // Implementation for perimeter depend on the type of triangle
  }

  toString() {
    return `triangleArea is ${this.setArea()} and trianglePerimeter is ${this.setPerimeter()}`;
  }
}
