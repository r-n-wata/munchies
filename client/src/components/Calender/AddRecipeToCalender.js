import { React, useState, useEffect} from "react";
import Recipes from "../ShowRecipes/Recipes";
import Time from "./Time";
import axios from "../../api/axios";
import Recipe from "../ShowRecipes/Recipe";


export default function AddRecipeToCalender({ date, recipeID, setRecipeID, showChooseRecipes, setSelectRecipe, selectRecipe, setSelectedTime, selectedDate, retrievedEvents, setRetrievedEvents, message, status, setSelectedRecipeName, setShowCalendarBtn, setShowSaveBtn, selectedRecipeName, selectedRecipeImg, setSelectedRecipeImg }){

   
    let showTime = false
    const [data, setData] = useState([])
    const [alert , setAlert ] = useState( status ? true : false)
    const [recipeEventName, setRecipeEventName] = useState('')
    const [recipeEventData, setRecipeEventData] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)
    const loading = require('../../imgs/gifs/loading.gif');
    console.log(alert)
    const handleSelectRecipe = () => {
        setSelectRecipe(prevState => !prevState)
        setShowCalendarBtn(prevState => !prevState)
        
       
    }

    // const handleCancelSave = () => {
    //     setSelectRecipe(false)
    //     setSelectedRecipeName('')
    //     setSelectedRecipeImg('')
        
    // }
    

    const idLen = recipeID.length > 0 
    // fetch the events
    useEffect(() =>{
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        
      };
        async function getRecipes(event){
            axios.get(`http://localhost:2121/api/event/find/${selectedDate}`, config)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
        
                console.log(err)
            })
        }

        getRecipes()

            
            }, [selectedDate])

            // console.log(data)
   
        // find the recipe when user clicks the recipe from list of events
            useEffect(() =>{

                async function getRecipes(event){
                    const token = localStorage.getItem('token')
                    const config = {
                        headers: { Authorization: `Bearer ${token}` }
                    
                  };
                    // prevents the default behaviour of a form i.e. when you submit form the whole page will automatically refresh
                    axios.get(`http://localhost:2121/api/recipes/find/${recipeEventName}`, config)
                    .then(res => {
                        setRecipeEventData(res.data)
                        console.log(recipeEventData)
                    })
                    .catch(err => {
                
                    console.log(err)
                    })
                }
        
                getRecipes()
                
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    }, [recipeEventName])
        
        const handleFindRecipeBtn = (event) =>{
            
            setRecipeEventName(event.target.firstChild.data)
            console.log(recipeEventData)
            console.log(recipeEventName)
            setShowRecipe(prevState =>  (!recipeEventData) ? prevState : !prevState)
            
            
            
        }

        const handleShowRecipeBtn = () => {
            setShowRecipe(false)
        }

        
        
        // sort the times and display them

        const timesData = [...data]
          const times  = data.length !== 0 ? timesData.sort((a, b) => {

            //  a = Number(a.timePlanned.replace(':', '').replace('  ', ''))
            //  b = Number(b.timePlanned.replace(':', '').replace('  ', ''))
            // return  a && b && a.timePlanned.localeCompare(b.timePlanned)
            return a.timePlanned - b.timePlanned
        
            })
            .map(el => {
                
           
                return(<p onClick={handleFindRecipeBtn}><span>{el.timePlanned}</span> <span >{el.recipeName}</span></p>)
            
            
        }) : []
        


        // set timer on pop up message box
        useEffect(() => {
            const timer = setTimeout(() => {
              setAlert(false);
            }, 1000);
            
            // To clear or cancel a timer, you call the clearTimeout(); method, 
            // passing in the timer object that you created into clearTimeout().
            
            return () => clearTimeout(timer);
          }, []);   

        
        console.log(selectRecipe)

    return(
        <>




            {date && !idLen && !showRecipe && !selectRecipe && <button type="button" className='add-recipe-event' onClick={ handleSelectRecipe }>{ !selectRecipe ? 'recipe': 'cancel'}</button>}

    
                {  !selectRecipe && !showRecipe&&

                    <div className="add-event-to-calender-container">

                        {/* { selectedRecipeImg &&<button onClick={ handleCancelSave }>Cancel</button>} */}
                        <Time 
                            showTime={showTime} 
                            date={date}
                            setSelectedTime = {setSelectedTime}
                        />

                        <h2>{ selectedRecipeName }</h2>
                        <img src={ selectedRecipeImg } className='add-event-to-calender-img' alt=''/>
                        <h4>{ date }</h4>

                        { !selectedRecipeImg && 
                            <div className="table">

                                {times.length === 0? <p>No events yet</p>: data.length > 0 ? times: <img src={ loading } alt='loading' />}
                            
                            </div>
                        }
                        
                    
                    </div>
                   
                   

                }
           
            
 


            {
                selectRecipe && 
                <Recipes 
                    setRecipeID = { setRecipeID }
                    setSelectedRecipeName = { setSelectedRecipeName }
                    setSelectRecipe = { setSelectRecipe }
                    selectRecipe = { selectRecipe }
                    setShowSaveBtn ={ setShowSaveBtn }
                    setSelectedRecipeImg= { setSelectedRecipeImg }
                    selectedRecipeName = { selectedRecipeName }
                />

                
               
            }

            {
                recipeEventData.length === 0 && showRecipe&&  
                <div className="loading-container">
                    <img src={ loading } className='loading' alt='loading' />
                </div>
                
            }

            {
                recipeEventData.length > 0 && showRecipe &&   
                
                <>
                    <button type="button" onClick={ handleShowRecipeBtn } className='add-recipe-event'>Back</button>
                    <Recipe 
                        data= { recipeEventData }

                    />
                </>
            }

              {/* { !alert &&

                 <MessageBox
                        message={ message }
                        status = { status }
                        />
              } */}
                       
                    
            
        </>
    )
}