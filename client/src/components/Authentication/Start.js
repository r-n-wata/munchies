import React from "react";
import '../../css/Start.css'
import { Link, useNavigate } from 'react-router-dom'

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

                <Link to='/login'className="initial-btn start-login-btn">Login</Link>
                {/* <a href="/login" >Login</a> */}

                <div className="signup-container">
                    <span>...need an Account?</span>
                    <Link to='/register'className="initial-btn">SignUp</Link>
                  
                </div>
            </div>
         
           

        
        
        </main>
    )
}