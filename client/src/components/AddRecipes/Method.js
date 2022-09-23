
import { useState } from 'react'
import '../../css/Method.css'




export default function Method({ setMethodCount, methods, setMethods, edit, updateRecipeMethods }) {

    // const { auth, setAuth }  = useContext(AuthContext)


    const [method, setMethod] = useState('')
    // const [methods, setMethods] = useState([])
    const [count, setCount] = useState(1)
    console.log(count)

    // const handleShowIngredients = () => {
    //     setAddIngredients(prevState => !prevState)

    // }
   
    

    
    const addMethod = (e) =>{
        e.preventDefault();
        // setMethods(method)
        
        
        if(method.length !== 0){
          setMethods(prevState => [...prevState, method])  
          setMethodCount(prevState => prevState +1)  
        }
        setMethod('')
    
    }

    const updateMethod = (e) =>{
        e.preventDefault();
        // setMethods(method)
        
        
        
        setMethods(method.split('\n'))
    }
    

    // console.log(allIngredients)

    const handleBtn = () =>{
        setCount(prevState => prevState + 1)
        
    }

  
    // const handleBackBtn = () =>{
    //     setShowAddMethods(prevState => !prevState)
        
    // }
console.log(methods.join('\n'))
    return (
     
            
                
            
                <>
                {!edit && 
                     <form onSubmit={addMethod} className='form-container addrecipe add-method'>
                        
                     <label>
 
                         <textarea 
                             type= 'text'
                             value={ method }
                             onChange={(e) => setMethod(e.target.value)}
                             ></textarea>
                     </label>
 
                     <input type='submit' value='Add Method' className='addrecipe-btn' id='method--btn' onClick={handleBtn}/>
 
                 </form>
                }

                {

                    edit &&
                    <form onSubmit={!edit ? addMethod : updateMethod} className='form-container addrecipe add-method'>
                        
                    <label>

                        <textarea 
                            type= 'text'
                            onChange={(e) => setMethod(e.target.value)}
                            defaultValue={  updateRecipeMethods ?  updateRecipeMethods : methods.join('\n')}></textarea>
                    </label>

                    <input type='submit' value='Add Method' className='addrecipe-btn' id='method--btn' onClick={ handleBtn }/>

                </form>

                }
                 
            {/* <button type='button' className='btn recipe-border method-margin'  onClick={handleBackBtn}>back</button> */}
            
            {/* <button className='btn addrecipe-btn  recipe-border' onClick={handleShowIngredients}>Next</button> */}

                </>
           
             

 

        
    )
}