import React from "react";
import Recipe from '../ShowRecipes/Recipe'


export default function Preview({  data, setEdit, setPreview, preview, handleUpdateRecipe}){
    
    const handleClick = () => {
        setEdit(true)
        setPreview(false)
    }

    

    return(
        <section className="preview">

             <div className="preview-btns">
             <button type="button"  className="recipes-btns" onClick={  handleUpdateRecipe  }>save</button>   
             <button type="button"  className="recipes-btns" onClick={ handleClick }>edit</button>
            </div>
            <Recipe
                data = { data }
                // updateRecipeImage = { updateRecipeData.image }
                // updateRecipeImage = { image }
                preview = { preview }
            />
               {/* { save && 

                    <>
                    <MessageBox
                        status= 'Yes!'
                        message = "Recipe Saved!" 
                        />
                        {window.location.reload()}
                    </> */}


                    {/* } */}

            

        </section>
    )
}