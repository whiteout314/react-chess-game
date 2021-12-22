import { pieces } from "../PieceData";
import { checkIfSame, checkPiece } from "./General";

export const queen = (pX, dX, pY, dY) => {
  let multX = dX < pX ? -1 : dX > pX ? 1 : 0;
  let multY = dY < pY ? -1 : dY > pY ? 1 : 0;
  for (var i = 1; i < 8; i++) {
    
    console.log('d.x: ' + dX + ' d.y: ' + dY);
    if (checkPiece(pX + i * multX, pY + i * multY)) {

      if (checkIfSame(pX + i * multX, pY + i * multY, dX, dY)) {
        return true;
      }
    } else {
      console.log("BREAK");
      break;
    }
  }
  return false;
};
