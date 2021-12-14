import { findAllByDisplayValue } from '@testing-library/react';
import {pieces} from '../PieceData';

export const horse = (pX, dX, pY, dY) => {
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

    //Basic movement of chess pieces
    console.log("Moving on the Y: " + dY - pY);
    console.log("Moving on the X: ")
    if(cont)
    {
    if(((dX - pX) === 1 && (dY - pY === 2)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === -1 && (dY - pY === -2)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === -1 && (dY - pY === 2)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === 1 && (dY - pY === -2)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === 2 && (dY - pY === 1)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === -2 && (dY - pY === -1)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === 2 && (dY - pY === -1)))
    {
        console.log("Move is valid");
        return true;
    }
    else if(((dX - pX) === -2 && (dY - pY === 1)))
    {
        console.log("Move is valid");
        return true;
    }
    

    else
    {
        return false;
    }
}
    else
    {   
        return false;

    }
}