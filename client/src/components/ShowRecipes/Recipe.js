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
                <div className="recipe-card" >
                <div className="recipe-card-header">
                    <h2>{ recipeObj.name }</h2>
                    <img src={ recipeObj.image } alt="" className="individuañRecipe-img"/>
                </div>

                <div className="recipe-card--main">
                    
                    <div className="showIngredients">
                        <h3>Ingredients</h3>
                        { ingredient }
                    </div>
                
                    {/* <p >{ recipeObj.method }</p> */}

                    <div className="method-container">
                        <h3>Method</h3>
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
                {preview === undefined && <button type='button' onClick={ handleEditBtn }>Edit</button>}
                

            

                    
                </div> 
            }
      
        </>
       
    )
}