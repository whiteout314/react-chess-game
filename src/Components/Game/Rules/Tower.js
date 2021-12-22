import { pieces } from "../PieceData";
import { checkIfSame, checkPiece } from "./General";

export const tower = (pX, dX, pY, dY) => {
  var multX = (dX < pX) ? -1: 1;
  var multY = (dY < pY) ? -1: 1;
  
  if (pY === dY) {
    for (var i = 1; i < 8; i++) {
      console.log("dx " + dX);
      console.log("dy " + dY);
      console.log("px " + pX);
      console.log("py " + pY);

      if (checkPiece(pX + i * multX, pY)) {
        if (checkIfSame(pX + i * multX, pY, dX, dY)) {
          return true;
        }
      } else {
        break;
      }
    }
  }
  for (var i = 1; i < 8; i++) {
    if (pX === dX) {
      console.log("X");

      if (checkPiece(pX, pY + i * multY)) {
        console.log("pY + i: " + (pY + i));
        console.log("dy: " + dY);
        if (checkIfSame(pX, pY + i * multY, dX, dY)) {
          console.log("TRUrE");
          return true;
        }
      } else {
        break;
      }
    }
  }
};
