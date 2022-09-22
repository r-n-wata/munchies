import { useState, useContext } from 'react'
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import '../../css/Login.css'
const url = require('../../api/axios').default
// import AuthContext from '../context/AuthProvider';


export default function Login() {
    const { auth, setAuth } = useAuth();
    // const { auth, setAuth }  = useContext(AuthContext)

    const navigate = useNavigate();
    const home = '/home'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMesage, setErrMessage] = useState('')

    
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
            setErrMessage('login failed!')
        }else{
            console.log(err)
        }
     
       
    })

    console.log(auth)
    // const data = await result.json();
    // console.log(data)
    }
    


    return (
     
            <section className='initial-page-container'>
                   <h1 className="start-title">munchies</h1>

                    <form onSubmit={loginUser} className='form-container'>

                    <input
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' 
                    placeholder='Email'
                    className='login-register-form-controls'
                    />
                    <br/>

                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    placeholder='Password'
                    className='login-register-form-controls'
                    />
                    <br/>

                    <input type='submit' value='Login' className='initial-btn'/>

                </form>


                <a href='' className='login-registerbtn btn'>Register</a>
            
           
               

            </section>

          

      

        
    )
}