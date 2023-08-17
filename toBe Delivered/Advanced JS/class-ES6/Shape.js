export default class Shape {
  constructor() {}

  setArea() {
    throw new Error(`You don't choose a shape`);
  }

  setPerimeter() {
    throw new Error(`You don't choose a shape`);
  }

  static count = {
    circles: 0,
    squares: 0,
    triangles: 0,
    toString() {
      return `Circles: ${Shape.count.circles}, Triangles: ${Shape.count.triangles}, Squares: ${Shape.count.squares}`;
    },
  };
}
