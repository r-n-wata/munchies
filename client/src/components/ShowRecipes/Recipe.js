import { React } from "react";
import ShowIngredients from "./ShowIngredients";
import '../../css/Recipe.css'

export default function Recipe({ data, id, setSelectedRecipeIDForCalender, setSelectRecipe, setSelectedRecipeName, selectRecipe, setShowSaveBtn, setShowCalendarBtn, selectedRecipeName, setSelectedRecipeImg, updateRecipe, setUpdateRecipe, updateRecipeImage, preview, setRecipeID  }){
   console.log(data.image)
 
    let recipeObj = data[0]
   
    const ingredientsArr = recipeObj.ingredients
    const ingredient = ingredientsArr.map(el =>{
        let result = []
        console.log(el)
        el.split(' ').forEach(char => {
            if('1234567890'.includes(char[0])){
                result.push(' ')
                result.push(char)
            }else{
                result.push(char)
            }
        })

        el = result.join(' ').split('   ')
        return (
           <ShowIngredients
                name={ el[0] }
                amount = { el[1] }
                />
        )
    })

    const handleSelectedRecipe = () => {
        
        
        
        setSelectedRecipeIDForCalender(recipeObj._id)
        setSelectedRecipeName(recipeObj.name)
        setSelectedRecipeImg(recipeObj.image)
        setRecipeID(recipeObj._id)
        
       
    }
    const handleSelectedRecipeBtn = () => {
         setSelectRecipe(prevState => !prevState)
         setShowSaveBtn(true)
         setShowCalendarBtn(true)
         
    }


    const show = setSelectRecipe === undefined ? true: false


    const method = recipeObj.method.map(el => (
        <p className="recipe-card-method">{ el}</p>
    ))

    console.log(selectedRecipeName)

    const handleEditBtn = () => {
        setUpdateRecipe(true)
    }

    return(
        <>
            { !updateRecipe &&
                <div className="w-full flex flex-col items-center justify-center desktop:w-1/2 pb-10 " >
                    <div className="text-center mt-4 w-full flex flex-col items-center pt-10 desktop:bg-gray-200 rounded-t-3xl desktop:pb-4">
                        <h2>{ recipeObj.name }</h2>
                        <img src={ recipeObj.image } alt="" className="w-40 h-auto mt-4"/>
                    </div>

                    <div className="flex flex-col items-center dekstop:bg-gray-300 desktop:w-full desktop:pt-4 desktop:pb-10">
                        
                        <div className="flex flex-col items-center w-full ">
                            <h3 className="mb-2">Ingredients</h3>
                            { ingredient }
                        </div>
                
                    {/* <p >{ recipeObj.method }</p> */}

                        <div className="flex flex-col items-center pt-8">
                            <h3 className="mb-2">Method</h3>
                            {method}   
                        </div>
                    
                </div>
            
            
                <img src="" alt=''/>  
            
                {
                    !show && 
                    <div className="calender-recipe-btn-container">
                        <button type="button" className="recipes-btns" onClick={ handleSelectedRecipe }>{ selectedRecipeName ? 'added' : '+' }</button>
                        <button type="button" className="recipes-btns" onClick={ handleSelectedRecipeBtn }>calender</button>
                    </div>
                    }
                {preview === undefined && <button type='button' className=' border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-orange-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-40 cursor-pointer hover:bg-orange-600 desktop:h-12 desktop:w-20' onClick={ handleEditBtn }>Edit</button>}
                

            

                    
                </div> 
            }
      
        </>
       
    )
}