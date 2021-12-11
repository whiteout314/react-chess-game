import React, {useRef, useState} from 'react';
import Tile from './Tile'; //import the tile component to push to board
import {pieces} from "./PieceData";
import '../Style/Chessboard.css';
export default function Chessboard ()
{

    const chessboardRef = useRef(null);
    let active = null; let chessboard = null;
    const [piece, setPiece] = useState(pieces);
    const grabPiece = (e = React.MouseEvent) => {
        const element = e.target;
        if(element.classList.contains("piece"))
        {
            const x = e.clientX - 50;
            const y = e.clinetY - 50;
            

            element.style.position = "absolute";
            element.style.top = `${y}px`;
            element.style.left = `${x}px`;
            chessboard = chessboardRef.current;
            active = element;
        }
    }
    const movePiece = (e = React.MouseEvent) => {
        chessboard = chessboardRef.current;
        if(chessboard && active)
        {
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            
            console.log(Math.floor(((e.clientX -50) - chessboard.offsetLeft) / 100));
            console.log(Math.abs(Math.ceil(((e.clientY - 50) -chessboard.offsetTop - 800) / 100)));
            active.style.top = `${y}px`;
            active.style.left = `${x}px`;
           
        }
        
    }
    const dropPiece = (e = React.MouseEvent) => {
        
            chessboard = chessboardRef.current;
            if(active)
            {
                const x = Math.floor(((e.clientX - 50) - chessboard.offsetLeft) / 100);
                const y = Math.abs(Math.ceil(((e.clientY - 50) -chessboard.offsetTop - 800) / 100));
                setPiece(value => {
                    const piece = value.map(p => {
                        p.x = x;
                        p.y = y;
                        return p;
                    })
                    return piece;
                })
                active.style.position = "relative";
                active.style.removeProperty("top");
                active.style.removeProperty("left");
                active = null;
                
            }
            
            
        
    }

    //initilize the chessboard array
    let board = [];
    //height and width of the board
    let HEIGHT = 8; let WIDTH = 8;

    for(var i = HEIGHT - 1 ; i >= 0; --i)
    {
        for(var j = 0; j < WIDTH; j++)
        {
            let imageData = null;
            let number = i + j + 2;
            pieces.forEach(p => {
                if(p.x === j && p.y === i)
                {
                    imageData = p.image;
                }
            });
            board.push(<Tile key = {`${j}, ${i}`} image = {imageData} position = {number}/>)
        }
    }

    return(
        <div 
        id = "chessboard"
        ref = {chessboardRef}
        onMouseDown = {grabPiece}
        onMouseMove = {movePiece}
        onMouseUp = {dropPiece}
            >
            {board}

        </div>
    )
}