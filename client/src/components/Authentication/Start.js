import React from "react";
import '../../css/Start.css'
import { Link } from 'react-router-dom'

export default function Start(){

    const stawberry =  require('../../imgs/vegetables/strawberry.png');
    const carrots = require('../../imgs/vegetables/carrot.png');
    const broccoli = require('../../imgs/vegetables/broccoli.png');
    const vegPlate = require('../../imgs/vegetables/vegetableplate.png');

    
    return (
        <main className="initial-page-container start-container">

            <div className="startPage-images-container">

                <img src={ stawberry } alt='strawberry' className="startPage-images strawberry"/>
                <img src={ carrots } alt='carrots' className="startPage-images carrots"/>
                <img src={ broccoli } alt='broccoli' className="startPage-images broccoli"/>
                <img src={ vegPlate } alt='vegetable plate' className="startPage-images vegPlate"/>
            </div>

            <div className="startPage-main-container">

                <h1 className="start-title">munchies</h1>

                <Link to='/login'className="border-2 flex justify-center items-center w-3/5 h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-4 border-2 border-gray-300 font-sans tracking-wide laptop:w-60 cursor-pointer hover:bg-red-600">Login</Link>
                {/* <a href="/login" >Login</a> */}

                <div className="signup-container mt-4">
                    <span>...need an Account?</span>
                    <Link to='/register'className="border-2 flex justify-center items-center w-full h-10 rounded-xl bg-red-500 text-gray-200 shadow mt-2 border-2 border-gray-300 font-sans tracking-wide italic cursor-pointer hover:bg-red-600">SignUp</Link>
                  
                </div>
            </div>
         
           

        
        
        </main>
    )
}