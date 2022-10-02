import React from "react";
import '../../css/SmallRecipeCard.css'


export default function SmallRecipeCard({ setUserId, name, image, id}){

    // sets id that is clicked
    const handleClick = () => {
        if(setUserId !== undefined){
          setUserId(id)  
        }
      
    }

    const err = name ? true : false
    console.log(err)

    return(
        <>
        
            {
                name ?

                <div className="w-1/4 desktop:w-32 " onClick={ handleClick }>
                    <img src={image} alt="" className="w-full rounded-xl"/>
                    <h2 className="text-xs">{name}</h2>
                    <span></span>
                    <img src="" alt=''/>   
            
                </div> : <span>nothing to see here</span>
            }

            
        </>
      
    )
}
        
       
