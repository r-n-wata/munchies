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
    const categoryData = new categoryDataImgs()
// // please delete below code
    // const [categoryData, setCategoryData] = useState(categoryDataImgs)
    const [clickedCatergory, setClickedCatergory] = useState('')


    
    const dataDietary = new dietary()
    // please delete below code
    // const [dataDietary, setDataDietary] = useState(dietary)
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
            axios.get(`https://munchies-production.up.railway.app/api/recipes/find`, config)
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



    const categoriesRecipe =  data.filter(obj => obj['category'] === clickedCatergory && obj)

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

    console.log(categoryData)

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

    
    const handleBackBtn = () => {
        setBack(prevState => !prevState)
        setId('')
    } 

    useEffect(() => {
      if(setRecipeID !== undefined){
        setRecipeID(selectedRecipeIDForCalender)
    }  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
     

    const recipe = data.filter(obj => Object.values(obj).indexOf(id) > -1 && obj )

    

    return(
        <>
            {
                !updateRecipe && 

                    <div className="w-full h-full pl-10 pr-4 pt-8 mb-20">
                        
                            {!id && !showCategoryRecipe && !showDietRecipe && !updateRecipe &&
                                <>

                                    <div id="recipes-recent-cards-container" className="mt-4">
                                        <div>
                                            <h4 className="text-sm">Recent</h4>
                                        </div>
                                        <div className="flex w-full overflow-x-scroll gap-4 h-32 mt-2 desktop:h-auto">

                                            {!loading ? recentRecipes : <Spinner
                                                loading = { loading }/>}
                                        </div>
                                    </div>

                                    <div id="recipes-recent-cards-container" className="mt-4">
                                        <div >
                                            <h4 className="text-sm">Favourites</h4>
                                        </div>
                                        <div className="flex w-full overflow-x-scroll gap-4 h-32 mt-2 desktop:h-auto">

                                        {!loading ? recentRecipes : <Spinner
                                                loading = { loading }/>}
                                        </div>
                                    </div>

                                    <div id="recipes-recent-cards-container" className="mt-4">
                                        <div >
                                            <h4 className="text-sm">Categories</h4>
                                        </div>
                                        <div className="flex w-full overflow-x-scroll gap-4 h-32 mt-2 desktop:h-auto">

                                        {categories}
                                        </div>
                                    </div>

                                    <div id="recipes-recent-cards-container" className="mt-4">
                                        <div >
                                            <h4 className="text-sm">Dietaries</h4>
                                        </div>
                                        <div className="flex w-full overflow-x-scroll gap-4 h-32 mt-2 desktop:h-auto">
                                        {dietaries}
                                        
                                        </div>

                                    </div>
                                </>
                        
                            }
                            { id && 
                                <button type='button' 
                                    className="bg-white width-20 h-8 rounded border-2 transition ease-in delay-150 pl-4 pr-4 h-12 hover:bg-orange-200"
                                    onClick={handleBackBtn}
                                >back</button>}



                            {id &&
                            
                                <div className="w-full flex justify-center">
                                    <Recipe 
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
                                        setRecipeID = { setRecipeID }

                                        />
                                </div>}
                
                        
                                {
                                    // !id &&  setShowCategoryRecipe && 
                                    clickedCatergory &&
                                    
                                    <div className="flex flex-col wrap gap-2 w-full overflow-auto ">
                                    { showCategoriesRecipes }   
                                    </div>
                                }

                                

                                {
                                    // !id && setShowDietRecipe  && 
                                    clickedDiet &&
                                    <div className="flex flex-col wrap gap-2 w-full overflow-auto ">
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