import React from "react";
import '../../css/SmallRecipeCard.css'


export default function SmallRecipeCard({ setUserId, name, image, id}){

    // sets id that is clicked
    const handleClick = () => {
        if(setUserId !== undefined){
          setUserId(id)  
        }
        

        
      
    }

    return(
        <div className="small-recipe-card" onClick={ handleClick }>
            <img src={image} alt="" className="small-recipe-card-img"/>
            <h2 className="small-recipe-card-title">{name}</h2>
            <span></span>
            <img src="" alt=''/>   
           
        </div>
    )
}