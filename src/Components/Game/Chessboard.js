import React, { useRef, useState } from "react";
import Tile from "./Tile"; //import the tile component to push to board
import { pieces } from "./PieceData";
import { rule } from "./Rules/Rule";
import "../Style/Chessboard.css";
export default function Chessboard() {
  const chessboardRef = useRef(null);
  let chessboard = null;
  let element = null;
  let white_player = true;
  const [piece, setPiece] = useState(pieces);
  const [color, setColor] = useState("white");
  const [grabX, setGrabX] = useState(0);
  const [grabY, setGrabY] = useState(0);

  const grabPiece = (e = React.MouseEvent) => {
    element = e.target;
    chessboard = chessboardRef.current;
    if (element.classList.contains("piece") && chessboard) {
      const x = e.clientX - 50;
      const y = e.clinetY - 50;
      setGrabX(Math.floor((e.clientX - chessboard.offsetLeft) / 100));
      setGrabY(
        Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100))
      );

      element.style.position = "absolute";
      element.style.top = `${y}px`;
      element.style.left = `${x}px`;
    }
  };
  const movePiece = (e = React.MouseEvent) => {
    element = e.target;
    chessboard = chessboardRef.current;
    if (chessboard && element.classList.contains("piece")) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      const minX = chessboard.offsetLeft - 40;
      const minY = chessboard.offsetTop - 40;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;

      if (x < minX) {
        element.style.left = `${minX}px`;
      } else if (x > maxX) {
        element.style.left = `${maxX}px`;
      } else {
        element.style.left = `${x}px`;
      }

      element.style.top = `${y}px`;
    }
  };
  const dropPiece = (e = React.MouseEvent) => {
    element = e.target;
    chessboard = chessboardRef.current;
    if (element.classList.contains("piece")) {
      let dropped = false;
      let prev_x = null; let prev_y = null;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      const dropX = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
      const dropY = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)
      );
      
        setPiece((value) => {
          const piece = value.map((p) => {
              prev_x = p.x;
              prev_y = p.y;
            if (p.x === grabX && p.y === grabY && p.color === color) {
              console.log(p.piece);
              var s = rule(p.piece, p.y, dropY, p.x, dropX, p.color);
              
              color === "white" ? setColor("black") : setColor("white");
              console.log(color);
              if (s) {
                p.x = dropX;
                p.y = dropY;
              }
              
            }
            
            return p;
          });
          
          return piece;

        });
        
        
      

      element.style.position = "static";
      element.style.removeProperty("top");
      element.style.removeProperty("left");
    }
  };

  //initilize the chessboard array
  let board = [];
  //height and width of the board
  let HEIGHT = 8;
  let WIDTH = 8;

  for (var i = HEIGHT - 1; i >= 0; --i) {
    for (var j = 0; j < WIDTH; j++) {
      let imageData = null;
      let number = i + j + 2;
      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          imageData = p.image;
        }
      });
      board.push(
        <Tile key={`${j}, ${i}`} image={imageData} position={number} />
      );
    }
  }

  return (
    <div
      id="chessboard"
      ref={chessboardRef}
      onMouseDown={grabPiece}
      onMouseMove={movePiece}
      onMouseUp={dropPiece}
    >
      {board}
    </div>
  );
}
