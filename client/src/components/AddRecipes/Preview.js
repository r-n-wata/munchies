import React from "react";
import Recipe from '../ShowRecipes/Recipe'


export default function Preview({  data, setEdit, setPreview, preview, handleUpdateRecipe}){
    
    const handleClick = () => {
        setEdit(true)
        setPreview(false)
    }

    

    return(
        <section className="w-full flex flex-col items-center">

             <div className="w-full flex justify-around mt-8 mb-0  ">
                <button type="button"  className="border-2 flex justify-center items-center w-20 h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-40 cursor-pointer hover:bg-red-600 desktop:h-12 desktop:w-20" onClick={  handleUpdateRecipe  }>save</button>   
                <button type="button"  className="border-2 flex justify-center items-center w-20 h-10 rounded-xl bg-orange-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-40 cursor-pointer hover:bg-orange-600 desktop:h-12 desktop:w-20" onClick={ handleClick }>edit</button>
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