import React from 'react';
import {pawn, pawnBlack} from './Pawn';
import {king} from './King';
import {bishop} from './Bishop';
import {queen} from './Queen';
import {horse} from './Horse';
import {tower} from './Tower';
export const rule = (piece, pY, dY, pX, dX, color) => 
{
    switch(piece)
    {
        case "pawn":
            switch(color)
            {
                case "white":
                    return pawn(pY, dY, pX, dX); 
                    break;
                case "black":
                    return pawnBlack(pY, dY, pX, dX);
            }
           
           break;
        case "king":
            return king(pY, dY, pX, dX);
            break;
        case "tower":
            return tower(pX, dX, pY, dY);
        case "queen":
            return queen(pX, dX, pY, dY);
        case "bishop":
            return bishop(pX, dX, pY, dY);
        case "horse":
            return horse(pX, dX, pY, dY);

    }
}