import React from "react";
import '../../css/Navigation.css'
import {  Link } from 'react-router-dom';


export default function Navigate() {

    // const fridge = require('../../imgs/meal-icons/icons8-fridge-50.png');
    
    const home = require('../../imgs/meal-icons/icons8-home-24.png');

    const add = require('../../imgs/meal-icons/add.png');
    
    const calender = require('../../imgs/meal-icons/icons8-calendar-24.png');

    const recipes = require('../../imgs/meal-icons/book.png');
    const logo = require('../../imgs/vegetables/logo-ish.png');
    return (

        <nav className="flex fixed bottom-0 w-full h-20 z-40 items-center mt-1 bg-gray-100 desktop:flex-col desktop:w-1/5 desktop:left-0 desktop:h-full desktop:justify-start desktop:top-0 desktop:bg-gray-300 ">
            <div className="hidden desktop:block desktop:w-24 desktop:h-18"><img src={ logo } alt='logo' className=""/></div>
             <ul className="flex w-full justify-around desktop:flex-col desktop:justify-start desktop:mt-1  desktop:bg-gray-300 desktop:h-full">
               
            

                <li >
                    <Link to='/calendar' className="flex flex-col items-center justify-center desktop:hover:bg-gray-400 desktop:h-20">
                        <img src={calender} alt="" className="w-6"/>
                        <span className="text-4" >calender</span>
                        </Link>
                </li>
                <li>
                    <Link to='/addrecipe' className="flex flex-col items-center justify-center desktop:hover:bg-gray-400 desktop:h-20">
                        <img src={add} alt="" className="w-6"/>
                        <span className="text-4">add</span>
                        </Link>
                </li>
                <li>
                        <Link to='/home' className="flex flex-col items-center justify-center desktop:hover:bg-gray-400 desktop:h-20">
                        <img src={home} alt="" className="w-6"/>
                        <span className="text-4">home</span>
                        </Link>
                </li>

                <li>
                    <Link to='/recipes' className="flex flex-col items-center justify-center desktop:hover:bg-gray-400 desktop:h-20">
                        <img src={recipes} alt="" className="w-6"/>
                        <span className="text-4">recipes</span>
                        </Link>
                </li>

                 
            
         </ul>
        </nav>
       
    )
}