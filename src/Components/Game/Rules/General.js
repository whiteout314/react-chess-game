import {pieces} from '../PieceData';


export const checkPiece = (x, y) => 
{
    var truth  = true;
    console.log('x: ' + x + ' y: ' + y);
    for(var p of pieces)  {
        console.log('p.x: ' + p.x + ' p.y: ' + p.y);
        
        if(x === p.x && y === p.y)
        {
            truth = false;
        }

    };    
    return truth;
}
export const checkIfSame = (pX, pY, dX, dY) => {
    if(pX === dX && pY === dY)
    {
        console.log("TRUE TOO");
        return true;
    }
}