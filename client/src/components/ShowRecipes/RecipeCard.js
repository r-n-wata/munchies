import {React, useEffect, useState} from "react";


export default function RecipeCard({ image, name, id, setUserId, setCategory, setDiet, setShowCategoryRecipe, setShowDietRecipe, loading }){

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

            name.length > 0 ? <div className="recipe-small-card" onClick={ handleClick }>
                <img src={image} alt="" className="recipe-img"/>
                <h2 className="recipe-card-title">{name}</h2>
            
                </div> : 
                <div className="recipe-small-card" onClick={ handleClick }>
                
                    <h2 className="recipe-card-title recipe-img">No recipes found!</h2>
            
                </div>
        }
          
        
        </>
            
          
           
    )
}