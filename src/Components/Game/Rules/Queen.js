import { pieces } from "../PieceData";

export const queen = (pX, dX, pY, dY) => {
  let cont = true;

  let attack = false;
  pieces.forEach((p) => {
    console.log("piece is fine");
    if (p.x === dX && p.y === dY) {
      cont = false;
      console.log("cont " + cont);
      if (p.color === "black") {
        attack = true;
      }
      if (
        attack &&
        (dX - pX <= 8 || dX - pX >= 0 || dY - pY <= 8 || dY - pY >= 0)
      ) {
        p.x = null;
        p.y = null;
        return true;
      }
    }
  });

  //Basic Movements
  if (cont) {
    if ((dX - pX <= 8 || dX - pX >= 0) && (dY - pY <= 8 || dY - pY >= 0)) {
      console.log("Move is valid");
      return true;
    } else {
      console.log("Move isn't valid");
      return false;
    }
  }
};
export const newQueen = (pX, dX, pY, dY) => {
  let x_forbide = [];
  let y_forbide = [];
  pieces.forEach((p) => {
    for(var x = dX; x < 8; x++)
    {
      for(var y = dY; y < 8; y++)
      {
        if ((dX - pX <= 8 || dX - pX >= 0) && (dY - pY <= 8 || dY - pY >= 0)) {
          console.log("passed this");
          if(x === p.x && y === p.y)
          {
            x_forbide.push(x);
            y_forbide.push(y);
          }
        }
      }
    }
  });
  for(var xy = 0; xy < x_forbide.length; xy++)
  {
    
      console.log("x: " + x_forbide);
      console.log("y: " + y_forbide);
      console.log("dX: " + dX);
      console.log("dY: " + dY);
      if(dX === x_forbide[xy] && dY === y_forbide[xy])
      {
        
        return false;
      }
      else
      {
        return true;
      }
    
  }
}
