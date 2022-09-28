import { useState} from 'react'
import Navigate from '../Navigation/Navigation';
import axios from '../../api/axios';
import jwt from 'jwt-decode'
import '../../css/AddRecipe.css'
import Method from './Method';
import AddIngredients from './AddIngredients';
import Preview from './Preview';
import MessageBox from '../Messege';
import Header from '../Section-header';



export default function AddRecipeInfo({ updateRecipe, updateRecipeData }) {

    const [name, setName]= useState(updateRecipeData!== undefined ? updateRecipeData.name : '' )
    const [servings, setServings] = useState(updateRecipeData!== undefined ? updateRecipeData.servings : '')
    const [category ,setCategory] = useState(updateRecipeData !== undefined? updateRecipeData.category : '')
    const [dietary, setDietary] = useState(updateRecipeData !== undefined? updateRecipeData.dietary :'')
    const [image, setImage] = useState(updateRecipeData !== undefined? updateRecipeData.image :'')
    const [userID, setUserID] = useState('')
    const [count, setCount] = useState(1)
    const [showAddMethods, setShowAddMethods] = useState(false)
    const [methods, setMethods] = useState(updateRecipeData !== undefined ? [...updateRecipeData.method] :[])
    const [ingredientCounnt, setIngredientCount] = useState(1)
    const [medthodCount, setMethodCount] = useState(1)
    const [preview, setPreview] = useState(false)
    const [edit, setEdit] = useState(updateRecipe !== undefined ? updateRecipe : false)
    const stawberry =  require('../../imgs/vegetables/strawberry.png');
    const [save, setSave] = useState(false)
    const [ingredients, setIngredients] = useState(updateRecipeData !== undefined ? [...updateRecipeData.ingredients] : []) 

    console.log(userID, count, showAddMethods)
    const recipeObj = [{
        category: category,
        dietary: dietary,
        image:image,
        ingredients: ingredients,
        method: methods,
        name: name,
        servings: servings

    }]

    

    const handlePreview = () => {

        setPreview(true)
     }


     const handleSubmitRecipe = (e) => {

        const accessToken = localStorage.getItem('token')
        const user = jwt(accessToken)
        setUserID(user._id)
        const token = localStorage.getItem('token')
       
        e.preventDefault();
        axios.post('http://localhost:2121/api/recipes/add', JSON.stringify({
            name: name,
            servings: servings,
            category: category,
            dietary: dietary,
            image: image,
            method: methods,
            ingredients: ingredients
            
        }), {
            headers: { 
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${token}` 
            }
        })

    .then(()=> {
          setSave(true)
          setPreview(false)
       
    })
    .catch(err => {
       
        console.log(err)
      
    })
}

    
     const handleUpdateRecipe = (e) => {

        const accessToken = localStorage.getItem('token')
        const user = jwt(accessToken)
        setUserID(user._id)
        const token = localStorage.getItem('token')
       
        e.preventDefault();
        axios.put(`http://localhost:2121/api/recipes/update/${updateRecipeData._id}`, {
            name: name,
            servings: servings,
            category: category,
            dietary: dietary,
            image: image,
            method: methods,
            ingredients: ingredients
            
        }, {
            headers: { 
                'Content-Type': 'application/json', 
                Authorization: `Bearer ${token}` 
            }
        })

    .then(() => {
        
        console.log('updated')
       
    })
    .catch(err => {
       
        console.log(err)
      
    })
     }

    console.log(image)
    
    return (

        <section className={!updateRecipe ? "relative h-screen desktop:w-4/5 desktop:absolute desktop:right-0 overflow-y-hidden desktop:pb-8": ""}>

            <Header
                title = { `add a Recipe!`}
                image = { stawberry }
                color= { 'violet' }
            />

            <div className="h-5/6 w-full absolute z-0 bottom-0 rounded-t-3xl bg-gray-100 overflow-y-scroll pb-20 desktop:flex desktop:w-full desktop:pb-8">

                {!preview && <>
                
                    <section className='flex flex-col items-start pl-10 pt-10 desktop:w-1/2'>
                        <h2 className='font-title w-1/2 text-gray-700 text-xl desktop:text-2xl desktop:w-full'>{ !edit ? `Add Ingredient ${ ingredientCounnt}.` : 'Ingredients'}</h2>
                        <AddIngredients 
                            setIngredients={ setIngredients }
                            ingredients = { ingredients }
                            setIngredientCount= { setIngredientCount }
                            edit={ edit }
                            updateRecipeIngredients = { updateRecipeData !== undefined &&
                                updateRecipeData.ingredients.join('\n') }
                            
                        />
                    </section>
                    
                    
                    <div className='flex flex-col items-start pt-10 pb-4 pl-10 w-1/2'>
                        <section className='flex flex-col items-start'>
                        <h2 className='font-title w-full text-gray-700 text-xl  desktop:text-2xl desktop:w-full'>{!edit ? `Add Method ${medthodCount}.` : 'Methods'}</h2>
                        <Method 
                            count = { setCount }
                            setMethods = { setMethods }
                            methods = { methods }
                            setShowAddMethods = { setShowAddMethods }
                            name= { name }
                            servings = { servings } 
                            category = { category }
                            dietary = { dietary } 
                            image= { image }
                            setMethodCount = { setMethodCount }
                            edit = { edit }
                            updateRecipeMethods = { updateRecipeData !== undefined && updateRecipeData.methods }


                        />
                         </section>
                        <h2 className='font-title w-1/2 text-gray-700 text-xl mt-8 desktop:text-2xl w-full'>Add Recipe Info</h2>

                        <form  className='relative flex flex-col items-start hap-1 w-full h-1/2 mt-4'>

                        <label className='flex flex-col text-gray-800' >

                            Name:
                            <input
                                // value={name} 
                                onChange={(e) => setName(e.target.value)}
                                type='text' 
                                required
                                className='h-8 border-2 border-gray-300 rounded mt-1'
                                defaultValue = { updateRecipeData !== undefined ? updateRecipeData.name : name}
                                />
                        </label>
                    
                        <br/>
                        <label className='flex flex-col text-gray-800'>
                            Servings:
                            <input 
                                // value={servings}
                                onChange={(e) => setServings(e.target.value)}
                                type='number' 
                                className='h-8 border-2 border-gray-300 rounded mt-1'
                                defaultValue={ updateRecipeData !== undefined ? updateRecipeData.servings : servings}
                            />

                        </label>
                            
                        <br/>

                        <label className='flex flex-col text-gray-800'>
                            Category:
                            <select onChange={(e) => setCategory(e.target.value)} defaultValue={ updateRecipeData !== undefined ? updateRecipeData.category : category } className='h-8 border-2 border-gray-300 rounded mt-1' >
                                <option value="select">select</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="salad">Salad</option>
                                <option value="main">Main</option>
                                <option value="side-dish">Side-dish</option>
                                <option value="baked-goods">Baked-good</option>
                                <option value="dessert">Dessert</option>
                                <option value="snack">Snack</option>
                                <option value="soup">Soup</option>
                                <option value="holiday">Holiday</option>
                                
                            </select>

                        </label>
                    
                        <br/>

                        <label className='flex flex-col text-gray-800'>
                            Dietry:

                            <select onChange={(e) => setDietary(e.target.value)} defaultValue={ updateRecipeData !== undefined ? updateRecipeData.dietary : dietary } className='h-8 border-2 border-gray-300 rounded mt-1'>
                                <option value="select">select</option>
                                <option value="cholesterol-friendly">cholesterol-friendly</option>
                                <option value="dairy-free">dairy-free</option>
                                <option value="diabetes-free">diabetes-free</option>
                                <option value="egg-free">egg-free</option>
                                <option value="gluten-free">gluten-free</option>
                                <option value="vegan-gluten-free">vegan-gluten-free</option>
                                <option value="iron-rich vegetarian">iron-rich vegetarian</option>
                                <option value="heart-healthy">heart-healthy</option>
                                <option value="low-fat">low-fat</option>
                                <option value="low-GI">low-GI</option>
                                <option value="low-salt">low-salt</option>
                                <option value="low-carbs">low-carbs</option>
                                <option value="nut-free">nut-free</option>
                                <option value="paleo">paleo</option>
                                <option value="vegan">vegan</option>
                                <option value="vegetarian">vegetarian</option>
                                <option value="non-vegetarian">non-vegetarian</option>
                            </select>
                        
                        </label>
                        
                        <br/>

                        <label className='flex flex-col text-gray-800'>
                            Image:
                            <input 
                                // value={ image }
                                onChange={(e) => setImage(e.target.value)}
                                type='text'
                                required 
                                className='h-8 border-2 border-gray-300 rounded mt-1'
                                defaultValue={ updateRecipeData !== undefined ? updateRecipeData.image : image }
                            /> 
                        </label>
                        
                        <br/>

                        {/* <input type='submit' value='preview' className='addrecipe-btn'/> */}
                        <button type='button'  onClick={ handlePreview } className=' border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-blue-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-40 cursor-pointer hover:bg-blue-600 desktop:h-16'>preview</button>

                    </form>
                
                        {/* </div> */}
                    
                    
                    
                    
                    
                    

            
                

                    </div>
                </>}
                


                    {methods.length === 0 && ingredients.length === 0 && preview &&
                    
                        <MessageBox
                            status= 'Failed'
                            message= "You have no methods or ingredients!"
                        />}
                    {preview && 
                        <Preview 
                            data = { recipeObj }
                            setEdit = { setEdit }
                            setPreview = { setPreview }
                            preview = { preview }
                            save = { save }
                            handleSubmitRecipe = { handleSubmitRecipe }
                            handleUpdateRecipe = { handleUpdateRecipe }
                            updateRecipeData = { updateRecipeData !== undefined && updateRecipeData }
                            image = {image}
                        />}

                    { save && 

                        <>
                         <MessageBox
                            status= 'Yes!'
                            message = "Recipe Saved!" 
                            />
                           {window.location.reload()} 
                        </>
                       
                        
                    }

                 </div>
                 

                 <Navigate/>
      
        
        </section>

          

      

        
    )
}