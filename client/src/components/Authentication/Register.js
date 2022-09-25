import React, { useState } from 'react'
import axios from 'axios'
import '../../css/Register.css'

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
            <div className='initial-page-container'>
                <h1 className="start-title">munchies</h1>

                    <form onSubmit={registerUser} className='form-container' id='register-form-container'>

                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text' 
                    placeholder='Name'
                    className='login-register-form-controls'
                    />

                    <input
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' 
                    placeholder='Email'
                    className='login-register-form-controls'
                    />


                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    placeholder='Password'
                    className='login-register-form-controls'
                    />

                    <input type='submit' value='Register' className='initial-btn' id='register-btn'/>

                </form>
            
               
               {errMesage && (
               <div className='err-container'>
                <span>Opps..Account already in use</span>
                <button className='login-btn'>Login</button>
                </div>)}

            </div>

      

        
    )
}