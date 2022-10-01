import React, { useState } from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMesage, setErrMessage] = useState('')

    async function registerUser(event){
        // prevents the default behaviour of a form i.e. when you submit form the whole page will automatically refresh

        event.preventDefault()
        // const repsonse = await fetch('http://localhost:5000/api/user/register',{
        //     method: 'POST',
        //     //tells the backend that were sending it as content-type of application json
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     // turns it into json string and sends to the backend
        //     body: JSON.stringify({
        //         name, 
        //         email, 
        //         password
        //     })
        // })

        // const data = await repsonse.json()

        // console.log(data)
            axios.post('/api/user/register', JSON.stringify({
                name,
                email,
                password 
            }), {
                headers: { 'Content-Type': 'application/json'}
            })
        .then(response => {
            console.log(response.data)
            window.location.href = '/login'  
        })
        .catch(err => {
            console.log(err)
            setErrMessage(err.response)
        })

    

    }

    return (
            <div className='w-full h-screen flex flex-col justify-start items-center pt-40'>
                <h1 className="font-title leading-10 mt-4 text-5xl text-red-600">munchies</h1>

                    <form onSubmit={registerUser} className='flex flex-col justify-center items-center width-full h-4/6 gap-4' >

                        <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text' 
                        placeholder='Name'
                        className='h-12 border-2 border-gray-300 rounded-xl mt-1s pt-4 pb-4 pl-2 pr-2'
                        />

                        <input
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type='email' 
                        placeholder='Email'
                        className='h-12 border-2 border-gray-300 rounded-xl mt-1s pt-4 pb-4 pl-2 pr-2'
                        />


                        <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password' 
                        placeholder='Password'
                        className='h-12 border-2 border-gray-300 rounded-xl mt-1s pt-4 pb-4 pl-2 pr-2s'
                        />

                        <input type='submit' value='Signup' className='border-2 flex justify-center items-center w-full h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-60 cursor-pointer hover:bg-red-600' />

                </form>
            
               
               {errMesage.length > 0 && (
               <div className='err-container'>
                <span>Opps..Account already in use</span>
                <Link to='/login' className='border-2 flex justify-center items-center w-full h-10 rounded-xl bg-white text-gray-700 shadow mt-4 border-2 border-red-300 font-sans tracking-wide laptop:w-60 cursor-pointer hover:bg-gray-100'>Login</Link>
                </div>)}

            </div>

      

        
    )
}