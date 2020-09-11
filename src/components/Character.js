// Write your Character component here
import React from 'react';



const Character = (props) => {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films } = props.character



    return (
        
    
        <div className="container">
             <h2>{name}</h2>
             <p>{height}</p>
             <p>{mass}</p>
             <p>{hair_color}</p>
             <p>{skin_color}</p>
             <p>{eye_color}</p>
             <p>{birth_year}</p>
             <p>{gender}</p>
             <p>{homeworld}</p>
             <p>{films}</p>
         </div>

    )

}
export default Character;