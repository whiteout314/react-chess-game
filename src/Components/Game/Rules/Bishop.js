import { pieces } from "../PieceData";
export const bishop = (pX, dX, pY, dY) => {
  let cont = true;
  pieces.forEach((p) => {
    console.log("piece is fine");
    if (p.x === dX && p.y === dY ) {
      cont = false;
    }
  });
  if (cont) {
    if ((dX - pX <= 8 || dX - pX >= 0) && dX != pX && dY != pY) {
      console.log("Move is valid");
      return true;
    } else if (dY - pY <= 8 && dY - pY >= 0 && dX != pX && dY != pY) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
      return false;
    }
  } else {
    return false;
  }
};
