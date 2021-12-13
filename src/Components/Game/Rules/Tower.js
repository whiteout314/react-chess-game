import { pieces } from "../PieceData";

export const tower = (pX, dX, pY, dY) => {
  let cont = true;
  pieces.forEach((p) => {
    console.log("piece is fine");
    if (p.x === dX && p.y === dY) {
      cont = false;
    }
  });
  //Basic movements
  if (cont) {
    if ((dX - pX <= 8 || dX - pX >= 0) && dY === pY) {
      console.log("Move is Valid");
      return true;
    } else if ((dY - pY <= 8 || dY - pY >= 1) && dX === pX) {
      console.log("Move is Valid");
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
