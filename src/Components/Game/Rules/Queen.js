import { pieces } from "../PieceData";

export const queen = (pX, dX, pY, dY) => {
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
  //Basic Movements
  if (cont) {
    if (dX - pX <= 8 || dX - pX >= 0 || dY - pY <= 8 || dY - pY >= 0) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
      return false;
    }
  } 
};
