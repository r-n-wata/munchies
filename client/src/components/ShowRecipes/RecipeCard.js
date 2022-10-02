import {React, useEffect, useState} from "react";


export default function RecipeCard({ image, name, id, setUserId, setCategory, setDiet, setShowCategoryRecipe, setShowDietRecipe }){

    const [valid, setValid] = useState(null)
    // sets id that is clicked
    console.log(valid)
    const handleClick = () => {
        if(setUserId !== undefined){
          setUserId(id)  
        }else if(setCategory !== undefined){
            setShowCategoryRecipe(prevState => !prevState)
          setCategory(name.toLowerCase())  
        }else if(setDiet !== undefined){
            setDiet(name.toLowerCase())
            setShowDietRecipe(prevState => !prevState)
        }
        

        
      
    }

    const data = name === undefined ? true : false

    useEffect(() => {
        fetch(image)
        .then((res) => {
            setValid(res.status === 200)
        }).catch(() => setValid(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return(
        
        <>
        {

            !data  ? <div className="w-full cursor-pointer" onClick={ handleClick }>
                <div className="w-20 h-20 rounded desktop:w-32 desktop:h-32">

                   <img src={image} alt="" className="rounded-xl w-20 h-full object-cover desktop:w-32"/> 
                </div>
                
                <h2 className="text-xs">{name}</h2>
            
                </div> : 
                <div className="w-full h-full" onClick={ handleClick }>
                
                    <h2 className="recipe-card-title recipe-img">No recipes found!</h2>
            
                </div>
        }
          
        
        </>
            
          
           
    )
}