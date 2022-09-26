
import { useState } from 'react'




export default function AddIngredients({ setIngredients, setIngredientCount, ingredients, edit,updateRecipeIngredients }) {

    const [amount, setAmount] = useState('')
    const [unit, setUnit] = useState('')
    const [ingredient, setIngredient] = useState('')
   

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
                   
                        {!edit &&  <form onSubmit={addIngredient}  className=' mt-5'>

                            <label className='flex flex-col text-gray-800'>

                                Amount:

                                <input
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                                type='number' 
                                className='h-8 border-1 boder-gray-300 rounded border-2 mt-1 '
                                />
                            </label>
                            <br/>
                            <label className='flex flex-col text-gray-800'>
                                Unit:
                               <input 
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                                type='text' 
                                className='h-8 border-1 boder-gray-300 rounded border-2 mt-1'
                                />  
                            </label>
                           
                            <br/>
                            <label className='flex flex-col text-gray-800'>
                                Ingredient:
                               <input 
                                value={ingredient}
                                onChange={(e) => setIngredient(e.target.value)}
                                type='text'
                                className='h-8 border-1 boder-gray-300 rounded border-2 mt-1'
                                />  
                            </label>
                           
                            <br/>

                            <input type='submit' value='Add Ingredient' className='addrecipe-btn border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-blue-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-40 cursor-pointer hover:bg-blue-600'/>

                    </form>}

                    {edit && 
                    <>
                         <form onSubmit={ updateIngredients } className='form-container addrecipe add-method'>
                        
                        <label className='flex flex-col'>
    
                            <textarea 
                                onChange={(e) => setIngredient(e.target.value)}
                                defaultValue={ updateRecipeIngredients ? updateRecipeIngredients : ingredients.join('\n') } />
                        </label>
    
                        <input type='submit' value='update' className='addrecipe-btn' id='method--btn' />
    
                    </form>

                    </>}
                         

                
           
                        
                   
                  
               
</>
          

          

      

        
    )
}