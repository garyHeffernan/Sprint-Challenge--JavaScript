// 1. Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length,
  width, and height
*/
class CuboidMaker {
  constructor (length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width
      + this.length * this.height
      + this.width * this.height);
  }
}

let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your
// volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(length, width, height, side) {
    super(length, width, height);
    this.side = side;
  }
  volume() {
    return this.side * this.side * this.side;
  }
  surfaceArea() {
    return 6 * this.side * this.side;
  }
}

let cube = new CubeMaker(4, 4, 4, 4);
console.log(cube.volume());
console.log(cube.surfaceArea());
