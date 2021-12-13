import React, {useRef, useState} from 'react';
import Tile from './Tile'; //import the tile component to push to board
import {pieces} from "./PieceData";
import '../Style/Chessboard.css';
export default function Chessboard ()
{

    const chessboardRef = useRef(null);
    let active = null; let chessboard = null;
    const [piece, setPiece] = useState(pieces);
    const [grabX, setGrabX] = useState(0);
    const [grabY, setGrabY] = useState(0);
    
    const grabPiece = (e = React.MouseEvent) => {
        const element = e.target;
        chessboard = chessboardRef.current
        if(element.classList.contains("piece") && chessboard)
        {
            const x = e.clientX - 50;
            const y = e.clinetY - 50;
            setGrabX(Math.floor((e.clientX - chessboard.offsetLeft) / 100));
            setGrabY(Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)));
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
            const minX = chessboard.offsetLeft - 40;
            const minY = chessboard.offsetTop - 40;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
            console.log(minX);

            if(x < minX){active.style.left = `${minX}px`}
            else if( x > maxX){active.style.left = `${maxX}px`;}
            else{active.style.left = `${x}px`;}
            

            
            active.style.top = `${y}px`;
            
           
        }
        
    }
    const dropPiece = (e = React.MouseEvent) => {
        
            chessboard = chessboardRef.current;
            if(active)
            {
                const x = e.clientX - 50;
                const y = e.clientY - 50;
                const dropX = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
                const dropY = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100));
                setPiece(value => {
                    const piece = value.map(p => {
                        if(p.x === grabX && p.y === grabY)
                        {
                            p.x = dropX;
                            p.y = dropY;
                        }
                        
                        return p;
                    })
                    return piece;
                })
                active.style.position = "relative";
                active.style.removeProperty("top");
                active.style.removeProperty("left");
                
                
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