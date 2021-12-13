import React from 'react';
import {pawn} from './Pawn';
import {king} from './King';
import {bishop} from './Bishop';
import {queen} from './Queen';
import {horse} from './Horse';
import {tower} from './Tower';
export const rule = (piece, pY, dY, pX, dX) => 
{
    switch(piece)
    {
        case "pawn":
           return pawn(pY, dY); 
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