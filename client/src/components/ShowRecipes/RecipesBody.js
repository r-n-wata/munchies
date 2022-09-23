import React, { useState } from "react";
import Navigate from "../Navigation/Navigation";
import '../../css/Recipes.css'
import Recipes from "./Recipes";


// import jwt from 'jsonwebtoken'

export default function RecipeBody (){

    const plate =  require('../../imgs/vegetables/vegetableplate.png');

    const [updateRecipe, setUpdateRecipe] = useState(false)
    return (

        <>
            <section className="home section-container">
            { !updateRecipe && <div className="header recipes-header">
                <h1 className="header-title">Recipes</h1>
                {/* <img src={carrot} alt='' className="header-img"/> */}
                <img src={plate} alt='' className="recipes-img"/>

            </div> }    
            
            <div className={updateRecipe ? "content reduce-height": 'content' }>
                <Recipes 
                    updateRecipe = { updateRecipe }
                    setUpdateRecipe = { setUpdateRecipe }
                />

                <Navigate />


            </div>
          
            </section>

        </>
    

    )
}