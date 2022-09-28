import React, { useState } from "react";
import Navigate from "../Navigation/Navigation";
import '../../css/Recipes.css'
import Recipes from "./Recipes";
import Header from "../Section-header";


// import jwt from 'jsonwebtoken'

export default function RecipeBody (){

    const plate =  require('../../imgs/vegetables/vegetableplate.png');

    const [updateRecipe, setUpdateRecipe] = useState(false)
    return (

        <>
            <section className="relative h-screen desktop:w-4/5 desktop:absolute desktop:right-0 overflow-y-hidden">
            { !updateRecipe && 
                <Header 
                    title= 'Recipes'
                    image= { plate }

                />
            }    
            
            <div className={updateRecipe ? "h-5/6 w-full absolute z-10 bottom-0 rounded-t-3xl bg-gray-100 overflow-y-scroll pb-20 reduce-height": 'h-5/6 w-full absolute z-10 bottom-0 rounded-t-3xl bg-gray-100 overflow-y-scroll pb-20' }>
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