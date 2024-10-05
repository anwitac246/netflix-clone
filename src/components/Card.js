import React from 'react';
export const Card = ({head, desc, image}) =>{
    return(
        <div className = "card">
            <h1>{head}</h1>
            <br/>
            <p>{desc}</p>
            <br></br>
            <div className='img'>{image}</div>
        </div>
    );
}