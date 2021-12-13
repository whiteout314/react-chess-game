import { pieces } from "../PieceData";
export const king = (
  positionY,
  desiredPositionY,
  positionX,
  desiredPositionX
) => {
  let cont = true;
  pieces.forEach((p) => {
    console.log("piece is fine");
    if (
      p.x === desiredPositionX &&
      p.y === desiredPositionY
      
    ) {
      cont = false;
    }
  });
  if (cont) {
    //Basic movements
    if (
      desiredPositionY - positionY === 1 ||
      desiredPositionY - positionY === -1
    ) {
      console.log("Move is valid");
      return true;
    } else if (
      desiredPositionX - positionX === 1 ||
      desiredPositionX - positionX === -1
    ) {
      console.log("Move is Valid");
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
