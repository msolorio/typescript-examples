////////////////////////////////////////////////////////////////////////////////////////
// DISCRIMINATING UNIONS
interface Shape {
  kind: 'circle' | 'square'; // sets type as a union of literal types
  radius?: number;
  sideLength?: number;
}

// ERROR:
// shape.kind cannot be a 'rect'
// function handleShape(shape: Shape) {
//   if (shape.kind === 'rect') {
//     //
//   }
// }

// ERROR:
// shape.radius is possibly 'undefined'
// function getArea(shape: Shape) {
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius ** 2;
//   }
// }

// Could use Non-null assertion to override null checks
// not ideal
function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius! ** 2;
  }
}

interface Circle {
  kind: 'circle',
  radius: number
}

interface Square {
  kind: 'square',
  sideLength: number
}

// This is the discriminating union
// - By assessing the kind property we can distinguish
// between the 2 interfaces.
type Shape1 = Circle | Square;

function getArea2(shape: Shape1) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
}

////////////////////////////////////////////////////////////////////////////////////////
// Switch statement w/Discriminating union
function getArea3(shape: Shape1) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.sideLength ** 2;
  }
}


function getArea4(shape: Shape1) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.sideLength ** 2;

    default:
      // Here shape has type 'never' - shape must be either Circle or Square
      const _exhaustiveCheck: never = shape;

      return _exhaustiveCheck;
  }
}

