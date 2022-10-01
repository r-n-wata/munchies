import { useState } from 'react'
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {  Link } from 'react-router-dom';



export default function Login() {
    const { auth, setAuth } = useAuth();
    // const { auth, setAuth }  = useContext(AuthContext)

    const navigate = useNavigate();
    const home = '/home'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMesage, setErrMessage] = useState('')

    console.log(errMesage)
    async function loginUser(event){
        // prevents the default behaviour of a form i.e. when you submit form the whole page will automatically refresh
        event.preventDefault()
        axios.post('/api/users/login', JSON.stringify({
            email,
            password 
        }), {
            headers: { 'Content-Type': 'application/json'}
        })
    

    .then(res => {
          const user= res.data
          setAuth({name:user.name, email, password, user:user.token,})
          navigate(home);
          localStorage.setItem('token', user.token )
          localStorage.setItem('userName', res.data.name )
        console.log(user)
    })
    .catch(err => {
        if(err.response.status === 400){
            setErrMessage('Login failed!')
        }else{
            console.log(err)
        }
     
       
    })

    console.log(auth)
    // const data = await result.json();
    // console.log(data)
    }
    


    return (
     
            <section className='w-full h-screen flex flex-col justify-start items-center pt-40'>
                   <h1 className="font-title leading-10 mt-4 text-5xl text-red-600">munchies</h1>

                    <form onSubmit={loginUser} className='flex flex-col  items-center width-full h-4/6 gap-0 mt-8'>

                        <input
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type='email' 
                        placeholder='Email'
                        className='h-12 border-2 border-gray-300 rounded-xl mt-1s pt-4 pb-4 pl-2 pr-2'
                        />
                        <br/>

                        <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password' 
                        placeholder='Password'
                        className='h-12 border-2 border-gray-300 rounded-xl mt-1s pt-4 pb-4 pl-2 pr-2'
                        />
                        <br/>

                        <input type='submit' value='Login' className='border-2 flex justify-center items-center w-full h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-60 cursor-pointer hover:bg-red-600'/>

                </form>

                {errMesage && <span>{ errMesage }</span>}
                {/* <a href='' className='login-registerbtn btn'>Register</a> */}

                <Link to='/register' className='border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-white text-gray-700 shadow mt-4 border-2 border-red-300 font-sans tracking-wide laptop:w-60 cursor-pointer hover:bg-gray-100'>
                    Signup
                        </Link>

                
            
           
               

            </section>

          

      

        
    )
}