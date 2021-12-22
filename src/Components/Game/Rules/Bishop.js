import { pieces } from "../PieceData";
import { checkIfSame, checkPiece } from "./General";
export const bishop = (pX, dX, pY, dY) => {
  for (var i = 1; i < 8; i++) {
    if (dX < pX && dY < pY) {
      if (checkPiece(pX - i, pY - i)) {
        if (checkIfSame(pX - i, pY - i, dX, dY)) {
          return true;
        }
      } else {
        break;
      }
    } else if (dX > pX && dY > pY) {
      if (checkPiece(pX + i, pY + i)) {
        if (checkIfSame(pX + i, pY + i, dX, dY)) {
          return true;
        }
      } else {
        break;
      }
    } else if (dX > pX && dY < pY) {
      if (checkPiece(pX + i, pY - i)) {
        if (checkIfSame(pX + i, pY - i, dX, dY)) {
          return true;
        }
      } else {
        break;
      }
    } else if (dX < pX && dY > pY) {
      if (checkPiece(pX - i, pY + i)) {
        if (checkIfSame(pX - i, pY + i, dX, dY)) {
          return true;
        } else {
          break;
        }
      }
    }
  }
};
