export {};
// structural type system (duck typing)
// - type checking focuses on the shapes values have
// - if 2 objects have same shape they are same type
// - We don't explicity need to declare the type of a new point object
// - point is compared to Point when passed as an argument to logPoint

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point): void {
  console.log(`${p.x}, ${p.y}`);
}

const point1 = {
  x: 0,
  y: 5
}

logPoint(point1);

// Only a subset of the fields are required to match
// when being passed to a function
// - if the object has all the required properties, TypeScript will
// say they match
const point2 = {
  x: 0,
  y: 5,
  z: 5
}

logPoint(point2);

const point3 = {
  color: 'orange'
};

//////////////////////////////////////////////////////////////////////////
// point3 is missing x and y
// will not compile
// logPoint(point3);

//////////////////////////////////////////////////////////////////////////
// However, explicitly declaring a point to a type Point
// can only specify known properties
// this will not compile
// const point3: Point = {
//   x: 0,
//   y: 1,
//   z: 0
// }

//////////////////////////////////////////////////////////////////////////
// Can use a class to declare an object with a shape of point

// class VirtualPoint {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

class VirtualPoint {
  constructor(
    public x: number,
    public y: number
  ) {}
}

const virtualPoint1 = new VirtualPoint(0, 2);

console.log('virtualPoint1 ==>', virtualPoint1);


logPoint(virtualPoint1);