import React from "react";
import '../../css/Navigation.css'
import {  Link } from 'react-router-dom';


export default function Navigate() {

    const fridge = require('../../imgs/meal-icons/icons8-fridge-50.png');
    
    const home = require('../../imgs/meal-icons/icons8-home-24.png');

    const add = require('../../imgs/meal-icons/add.png');
    
    const calender = require('../../imgs/meal-icons/icons8-calendar-24.png');

    const recipes = require('../../imgs/meal-icons/book.png');
    const logo = require('../../imgs/vegetables/logo-ish.png');
    return (

        <nav className="nav-bar">
            <div className="nav-bar--icons--logo"><img src={ logo } alt='logo' className="logo-img"/></div>
             <ul className="nav-bar--icons-container">
               
            

                <li>
                    <Link to='/calendar'>
                        <img src={calender} alt=""/>
                        <span>calender</span>
                        </Link>
                </li>
                <li>
                    <Link to='/addrecipe'>
                        <img src={add} alt=""/>
                        <span>add</span>
                        </Link>
                </li>
                <li>
                        <Link to='/home'>
                        <img src={home} alt=""/>
                        <span>home</span>
                        </Link>
                </li>

                <li>
                    <Link to='/recipes'>
                        <img src={recipes} alt=""/>
                        <span>recipes</span>
                        </Link>
                </li>

                 
            
         </ul>
        </nav>
       
    )
}