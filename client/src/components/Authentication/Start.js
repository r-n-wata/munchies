import React from "react";
import '../../css/Start.css'
import { Link } from 'react-router-dom'

export default function Start(){

    const image =  require('../../imgs/vegetables/all.png');
   

    
    return (
        <section className="mt-20">

            <div className="flex relative h-32 justify-center desktop:h-40">

                <img src={image} alt='all header images' className='w-64 h-40 absolute -top-4 desktop:w-80 desktop:h-52 desktop:-top-6'/>
            </div>

            <div className="w-full relative z-20 bg-white flex flex-col items-center">

                <h1 className="font-title leading-10 mt-4 text-5xl text-red-600">munchies</h1>

                <Link to='/login'className="border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-60 cursor-pointer hover:bg-red-600">Login</Link>
                {/* <a href="/login" >Login</a> */}

                <div className="flex flex-col gap-1 w-60 mt-4">
                    <span>...need an Account?</span>
                    <Link to='/register'className="border-2 flex justify-center items-center w-full h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-2 border-2 border-gray-300 font-sans tracking-wide italic cursor-pointer hover:bg-red-600">SignUp</Link>
                  
                </div>
            </div>
         
           

        
        
        </section>
    )
}