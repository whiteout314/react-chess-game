import { pieces } from "../PieceData";
export const bishop = (pX, dX, pY, dY) => {
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
