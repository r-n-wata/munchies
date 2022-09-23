import {React, useEffect, useState} from "react";
import RecipeCard from "./RecipeCard";
import '../../css/Recipes.css'
import axios from "../../api/axios";
import Recipe from "./Recipe";
import { categoryDataImgs } from "../../data/categoris";
import { dietary } from "../../data/dietary";
import SmallRecipeCard from "./SmallRecipeCard";
import Spinner from "../Spinner";
import AddRecipeInfo from "../AddRecipes/AddRecipeInfo";


export default function Recipes({ setRecipeID, setSelectedRecipeName, setSelectRecipe, selectRecipe, setShowSaveBtn, setShowCalendarBtn, setSelectedRecipeImg, selectedRecipeName, updateRecipe, setUpdateRecipe }){
    const [data, setData] = useState([])
    const add = false
    const [id, setId] = useState('')
    const [back, setBack] = useState(false)
    const [selectedRecipeIDForCalender, setSelectedRecipeIDForCalender] = useState('')
    const categoryData = categoryDataImgs
    const [clickedCatergory, setClickedCatergory] = useState('')


    
    const dataDietary = dietary
    const [clickedDiet, setClickedDiet] = useState('')
   

    const [showCategoryRecipe, setShowCategoryRecipe] = useState(false)
    const [showDietRecipe, setShowDietRecipe] = useState(false)
    const [loading, setLoading] =useState(false)

    // const [updateRecipe, setUpdateRecipe] = useState(false)

   console.log(add, back)

    useEffect(() =>{

        
        const token = localStorage.getItem('token')
        const config = {
                headers: { Authorization: `Bearer ${token}` }
            
          };
        setLoading(true)
        async function getRecipes(event){
           
            // prevents the default behaviour of a form i.e. when you submit form the whole page will automatically refresh
            axios.get(`http://localhost:2121/api/recipes/find`, config)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => {
        
            console.log(err)
            })
            .finally(() => {
                setLoading(false);
            });
        }

        getRecipes()

            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])


    

    const categoriesRecipe = data.filter(obj => obj['category'] === clickedCatergory && obj)

    const dietariesRecipe = data.filter(obj => obj['dietary'] === clickedDiet && obj )

 


    const recentRecipes = data.map(recipe => {
        
        return (
            <RecipeCard
                    image= { recipe.image }
                    name = { recipe.name }
                    key = { recipe._id }
                    id = { recipe._id }
                    setUserId= { setId }
                    loading = { loading }
                    
            />
        )
    })


    


    const categories = categoryData.map(recipe => {
       
        return (
            <RecipeCard
                    image= { recipe.image }
                    name = { recipe.title }
                    key= {recipe.key}
                    setCategory = { setClickedCatergory }
                    setShowCategoryRecipe = { setShowCategoryRecipe }

            />
        )
    })

    const dietaries = dataDietary.map(recipe => {
       
        return (
            <RecipeCard
                    image= { recipe.image }
                    name = { recipe.title }
                    key= {recipe.key}
                    setDiet = { setClickedDiet }
                    setShowDietRecipe = { setShowDietRecipe }

            />
        )
    })

    const showCategoriesRecipes = categoriesRecipe.map(recipe => {
       
        return (
            <SmallRecipeCard 
                image= { recipe.image }
                name = { recipe.name }
                id = { recipe._id }
                setUserId= { setId }
              />
        )
    })

    const showDietariesRecipes = dietariesRecipe.map(recipe => {
       
        return (
            <SmallRecipeCard 
                image= { recipe.image }
                name = { recipe.name }
                setUserId= { setId }
                id = { recipe._id }
            />
        )
    })

    // console.log(dietariesRecipe)
   


    // const handleAddBtn = () => {
    //     setAdd(prevState => !prevState)
    //     // setShowAddIngredients(false)
    // }

    const handleBackBtn = () => {
        setBack(prevState => !prevState)
        setId('')
    } 

    useEffect(() => {
      if(setRecipeID !== undefined){
        setRecipeID(selectedRecipeIDForCalender)
        // setSelectRecipe(prevState => !prevState)
    }  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
     

    const recipe = data.filter(obj => Object.values(obj).indexOf(id) > -1 && obj )

    

    return(
        <>
            {
                !updateRecipe && 

                    <div className="recipe-body">
                        
                            {!id && !showCategoryRecipe && !showDietRecipe && !updateRecipe &&
                                <>

                                    <div id="recipes-recent-cards-container">
                                        <div className="recipes-recent-cards-header">
                                            <h4>Recent</h4>
                                        </div>
                                        <div id="recipes-recent-cards">

                                            {!loading ? recentRecipes : <Spinner
                                                loading = { loading }/>}
                                        </div>
                                    </div>

                                    <div id="recipes-recent-cards-container">
                                        <div className="recipes-recent-cards-header">
                                            <h4>Favourites</h4>
                                        </div>
                                        <div id="recipes-recent-cards">

                                        {!loading ? recentRecipes : <Spinner
                                                loading = { loading }/>}
                                        </div>
                                    </div>

                                    <div id="recipes-recent-cards-container">
                                        <div className="recipes-recent-cards-header">
                                            <h4>Categories</h4>
                                        </div>
                                        <div id="recipes-recent-cards">

                                        {categories}
                                        </div>
                                    </div>

                                    <div id="recipes-recent-cards-container">
                                        <div className="recipes-recent-cards-header">
                                            <h4>Dietaries</h4>
                                        </div>
                                        <div id="recipes-recent-cards">
                                        {dietaries}
                                        
                                        </div>

                                    </div>
                                </>
                        
                            }
                            { id && 
                                <button type='button' 
                                    id='recipes-back-btn' 
                                    // id='addrecipe-back' 
                                    className="recipes-btns"
                                    onClick={handleBackBtn}
                                >back</button>}



                            {id && <Recipe 
                                data = { recipe }
                                id= { id }
                                setSelectedRecipeIDForCalender = { setSelectedRecipeIDForCalender }
                                setSelectRecipe = { setSelectRecipe }
                                selectRecipe ={ selectRecipe }
                                setSelectedRecipeName = { setSelectedRecipeName }
                                setShowSaveBtn = { setShowSaveBtn }
                                setShowCalendarBtn = { setShowCalendarBtn }
                                setSelectedRecipeImg = { setSelectedRecipeImg }
                                selectedRecipeName = { selectedRecipeName }
                                updateRecipe= { updateRecipe }
                                setUpdateRecipe= { setUpdateRecipe }

                                />}
                
                        
                                {
                                    !id &&  setShowCategoryRecipe && 
                                    
                                    <div className="all-categories-recipes">
                                    { showCategoriesRecipes }   
                                    </div>
                                }

                                {
                                    !id && setShowDietRecipe  && 

                                    <div className="all-diet-recipes">
                                    { showDietariesRecipes }   
                                    </div>
                                    
                                }


                

                </div>

            }
            
      
            {updateRecipe && 
                        
                <AddRecipeInfo 
                
                    updateRecipe = { updateRecipe }
                    updateRecipeData = { recipe[0] }
                />}

        
   </>
        
    )
}