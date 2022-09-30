
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
                     <form onSubmit={addMethod} className=''>
                        
                     <label>
 
                         <textarea 
                             type= 'text'
                             value={ method }
                             onChange={(e) => setMethod(e.target.value)}
                             className='h-32 w-50 border-2 border-gray-300 rounded mt-1'
                             ></textarea>
                     </label>
 
                     <input type='submit' value='Add Method' className=' border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-blue-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-40 cursor-pointer hover:bg-blue-600' onClick={handleBtn}/>
 
                 </form>
                }

                {

                    edit &&
                    <form onSubmit={!edit ? addMethod : updateMethod} >
                        
                    <label>

                        <textarea 
                            type= 'text'
                            onChange={(e) => setMethod(e.target.value)}
                            className='h-32 w-50 border-2 border-gray-300 rounded mt-1'
                            defaultValue={  updateRecipeMethods ?  updateRecipeMethods : methods.join('\n')}></textarea>
                    </label>

                    <input type='submit' value='Update Method' className='border-2 flex justify-center items-center w-3/4 h-10 rounded-xl bg-blue-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide  laptop:w-40 cursor-pointer hover:bg-blue-600'  onClick={ handleBtn }/>

                </form>

                }
                 
            {/* <button type='button' className='btn recipe-border method-margin'  onClick={handleBackBtn}>back</button> */}
            
            {/* <button className='btn addrecipe-btn  recipe-border' onClick={handleShowIngredients}>Next</button> */}

                </>
           
             

 

        
    )
}