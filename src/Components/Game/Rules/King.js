import { pieces } from "../PieceData";
export const king = (
  pY,
  dY,
  pX,
  dX
) => {
  let cont = true;
  let attack = false;
  pieces.forEach((p) => {
    console.log("piece is fine");
    if (p.x === dX && p.y === dY) {
      cont = false;
      
    }
    if(p.x === dX && p.y === dY && p.color === "black")
    {
      attack = true;
      p.x = null;
      p.y = null;
      console.log("Attack: " + attack);
    }
  });
  if(attack)
  {
    return true;
  }
  if (cont) {
    //Basic movements
    if (
      dY - pY === 1 ||
      dY - pY === -1
    ) {
      console.log("Move is valid");
      return true;
    } else if (
      dX - pX === 1 ||
      dX - pX === -1
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
