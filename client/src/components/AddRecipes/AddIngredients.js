
import { useState } from 'react'
import axios from 'axios'
import '../../css/AddIngredients.css'
import jwt from 'jwt-decode'
import AddRecipeInfo from './AddRecipeInfo'
import { useNavigate } from 'react-router-dom'



export default function AddIngredients({ setShowAddIngredients, methods, name, servings, category, dietary, image, setIngredients, setIngredientCount, ingredients, edit,updateRecipeIngredients }) {

    // const { auth, setAuth }  = useContext(AuthContext)


    const [amount, setAmount] = useState('')
    const [unit, setUnit] = useState('')
    const [ingredient, setIngredient] = useState('')
    // const [ingredients, setIngredients] = useState([])
    const [userID, setUserID] = useState('')
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate();
    const to = '/addrecipe'
    // const [allIngredients, setAllIngredients] = useState({amounts: '', units: '', ingredients: ''})

   
    
    const addIngredient = (e) =>{
        e.preventDefault();
        setIngredients(prevState => [...prevState, ingredient + ' ' + amount + unit])
        setAmount('')
        setUnit('')
        setIngredient('')
        setIngredientCount(prevState => prevState +1)
    }

    const updateIngredients = (e) =>{
        e.preventDefault();
        
        setIngredients(ingredient.split('\n'))
    }
    console.log(updateRecipeIngredients)


    return (
     
           <>
                   
                        {!edit &&  <form onSubmit={addIngredient} id='addIngredientForm' className='addrecipe'>

                            <label >

                                Amount:

                                <input
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                                type='number' 
                                className='login-register-form-controls'
                                />
                            </label>
                            <br/>
                            <label>
                                Unit:
                               <input 
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                type='text' 
                                className='login-register-form-controls'
                                />  
                            </label>
                           
                            <br/>
                            <label>
                                Ingredient:
                               <input 
                                value={ingredient}
                                onChange={(e) => setIngredient(e.target.value)}
                                type='text'
                                className='login-register-form-controls'
                                />  
                            </label>
                           
                            <br/>

                            <input type='submit' value='Add Ingredient' className='addrecipe-btn'/>

                    </form>}

                    {edit && 
                    <>
                         <form onSubmit={ updateIngredients } className='form-container addrecipe add-method'>
                        
                        <label>
    
                            <textarea 
                                onChange={(e) => setIngredient(e.target.value)}
                                defaultValue={ updateRecipeIngredients ? updateRecipeIngredients : ingredients.join('\n') } />
                        </label>
    
                        <input type='submit' value='update' className='addrecipe-btn' id='method--btn' />
    
                    </form>

                    </>}
                         

                    {/* <button type='button' className='recipe-border btn' id='addrecipe-btn add-ingredients' onClick={handleSubmit}>Save Recipe!</button> */}

                     {/* <button type='button' className=' recipe-border btn' id='addrecipe-back add-ingredients' onClick={handleRefreshBtn}>Restart</button> */}

                
           
                        
                   
                  
               
</>
          

          

      

        
    )
}