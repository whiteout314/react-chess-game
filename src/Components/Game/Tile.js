import React from 'react';
import '../Style/Tile.css';

export default function Tile ({position, image})
{
    if(position % 2 === 0)
    {
       
        return(
            <div id = "Tile" className = "White">
                {image && <div style = {{backgroundImage: `url(${image})`}}className = "piece" > </div>}
            </div>
        )

    }
    else{
        return(
            <div id = "Tile" className = "Black">
                {image && <div style = {{backgroundImage: `url(${image})`}}className = "piece" > </div>}

            </div>
        )
    }
}