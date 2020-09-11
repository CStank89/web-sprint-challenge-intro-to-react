// Write your Character component here
import React from 'react';
import styled from 'styled-components';



const StyledCharacter = styled.div`
  border-bottom: 2px solid white;
  color: ${pr => pr.theme.white};
  padding: ${pr => pr.theme.paddingSmall};
  width:  100%;
  display: flex;
  font-size: 5rem;
  justify-content: center;
`


const Character = (props) => {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films } = props.character


    return (
        
        <div class="dropdown">
            <span>{name}</span>
        <StyledCharacter class="dropdown-content">
            <p>{height}</p>
               <p>{mass}</p>
               <p>{hair_color}</p>
               <p>{skin_color}</p>
               <p>{eye_color}</p>
               <p>{birth_year}</p>
               <p>{gender}</p>
               <p>{homeworld}</p>
               <p>{films}</p>
        </StyledCharacter>
        </div>
        

        // <div class="dropdown">
        // <button onclick="myFunction()" class="dropbtn">{name}</button>
        // <div id="myDropdown" class="dropdown-content">
        //     <a href="#">{height}</a>
        //     <a href="#">{mass}</a>
        //     <a href="#">{hair_color}</a>
        //     <a href="#">{skin_color}</a>
        //     <a href="#">{eye_color}</a>
        //     <a href="#">{birth_year}</a>
        //     <a href="#">{gender}</a>
        //     <a href="#">{homeworld}</a>
        //     <a href="#">{films}</a>
        // </div>
        // </div>
    
        //  <div className="container">
        //       <h2>{name}</h2>
        //       <p>{height}</p>
        //       <p>{mass}</p>
        //       <p>{hair_color}</p>
        //       <p>{skin_color}</p>
        //       <p>{eye_color}</p>
        //       <p>{birth_year}</p>
        //       <p>{gender}</p>
        //       <p>{homeworld}</p>
        //       <p>{films}</p>
        //   </div>

    )

}
export default Character;