import { React, useState} from "react";
import Navigate from "../Navigation/Navigation";
import '../../css/FullCalender.css'
import Calender from "./Calender";
import AddRecipeToCalender from "./AddRecipeToCalender";
import axios from "../../api/axios";
import MessageBox from "../Messege";
import Header from "../Section-header";

export default function FullCalender(){

    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState(' ')
    const [recipeID, setRecipeID] = useState('')
    const [showChooseRecipes, setShowChooseRecipes] = useState(true)
    const [selectRecipe, setSelectRecipe] = useState(false)
    const [selectedRecipeName, setSelectedRecipeName] = useState('')
    const [selectedRecipeImg, setSelectedRecipeImg] = useState('')
    const [retrievedEvents, setRetrievedEvents] = useState('')
    const [messageBoxTitle, setMessageBoxTitle] = useState('')
    const [messageBoxMessage, setMessageBoxMessage] = useState('')
    const [alert , setAlert ] = useState(false)
    const [showSaveBtn, setShowSaveBtn] = useState(false)
    const [showCalendarBtn, setShowCalendarBtn] = useState(true)

    const broccoli =  require('../../imgs/vegetables/broccoli.png');
    const handleBackBtn = () => {
        setSelectedDate()
        setRecipeID('')
        setShowChooseRecipes(prevState => !prevState)
        setSelectRecipe(false)

    }

    
  
  
    // posts event
    const handleSubmit = (e) => {
        setAlert(true);
        setTimeout(() => {
                       setAlert(false);
                   }, 3000);
        const date = selectedDate.toString().split(' ').slice(0, 4).join(' ')
        const token = localStorage.getItem('token')
       
        
        e.preventDefault();
        axios.post('https://munchies-production.up.railway.app/api/event/addevent', JSON.stringify({
            recipeID: recipeID,
            recipeName: '',
            date: date,
            time: selectedTime,
            name: selectedRecipeName,
            image: selectedRecipeImg

        }),{
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            }
        })

    .then(() => {
          
          setMessageBoxTitle('Success')
          setMessageBoxTitle('Successfully added the event!')
          setShowCalendarBtn(true)
          setShowSaveBtn(false)
          window.location.reload();
       
    })
    .catch(err => {
        console.log(err)
        setMessageBoxMessage('Failed')
        setMessageBoxTitle('Failed to add the event, please check all information is correctly filled!')
    })


}


    // retrives plan
    

    console.log(selectedRecipeName)
   
    return(
        <section className="relative h-screen desktop:w-4/5 desktop:absolute desktop:right-0 overflow-y-hidden desktop:pb-8">

        <Header
                title = { `Calendar`}
                image = { broccoli }
            />
        <div className={!selectedDate ? "h-5/6 w-full absolute z-0 bottom-0 rounded-t-3xl bg-gray-100 overflow-y-scroll pb-20 desktop:flex desktop:w-full desktop:pb-8 grey overflow-y-hidden" : 'h-5/6 w-full absolute z-0 bottom-0 rounded-t-3xl bg-gray-100 overflow-y-scroll pb-20 desktop:flex desktop:w-full desktop:pb-8 desktop:border-2'}>


            <div className={!selectedDate ? 'flex w-full h-full flex-col gap-4 pl-8 pr-8 mt-12 overflow-y-hidden' : 'hidden'}>
              <Calender 
                setSelectedDate = { setSelectedDate }
               
               
                />
            </div>

          
          

            <div className={selectedDate ? "flex relative bg-gray-100 h-full flex-col gap-4 mt-12 mb-32 desktop:w-full" : 'hidden'}>

                   <AddRecipeToCalender 
                    date = { selectedDate }
                    selectedDate ={ selectedDate }
                    recipeID = {recipeID}
                    setRecipeID = { setRecipeID }
                    showChooseRecipes = { showChooseRecipes }
                    selectRecipe = { selectRecipe }
                    seleectedDate = { setSelectedDate }
                    setSelectRecipe = { setSelectRecipe }
                    setSelectedTime = { setSelectedTime }
                    retrievedEvents= { retrievedEvents }
                    setRetrievedEvents = { setRetrievedEvents }
                    setSelectedRecipeName = { setSelectedRecipeName }
                    setShowSaveBtn = { setShowSaveBtn }
                    setShowCalendarBtn= { setShowCalendarBtn }
                    selectedRecipeName = { selectedRecipeName }
                    selectedRecipeImg = { selectedRecipeImg }
                    setSelectedRecipeImg ={ setSelectedRecipeImg }
                    
                    
                    
                    />

                    <div className="flex justify-around">

                            {
                        showSaveBtn &&
                        
                        <button type='submit'  className=' border-2 flex justify-center items-center w-40 h-10 rounded-xl bg-orange-600 text-gray-200 shadow mt-4 border-2 border-gray-300 w-1/4 pt-4 pb-4 pl-4 pr-4 font-sans tracking-wide hover:bg-orange-700  laptop:w-40 cursor-pointer hover:bg-blue-600  desktop:h-12 desktop:w-32 '  onClick={ handleSubmit }>Save</button>
                    }
                   

                    {
                        selectedDate && showCalendarBtn && <button type="button" className="border-2 flex justify-center items-center w-40 h-10 rounded-xl bg-orange-600 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide w-1/4 pt-4 pb-4 pl-4 pr-4  hover:bg-orange-700  laptop:w-40 cursor-pointer hover:bg-blue-600 desktop:h-12 desktop:w-32" onClick={ handleBackBtn }>calender</button>
                    }
                    </div>
                

                    { alert &&

                        <MessageBox
                            message={ messageBoxMessage }
                            status = { messageBoxTitle }
                            />
                    }
                                        
                    

            </div>

            
             
            <Navigate />


        </div>
      
    </section>
    )
}