import React, { useEffect, useState } from "react";
import Navigate from "../Navigation/Navigation";
import useAuth from '../../hooks/useAuth'
import '../../css/Home.css'
import axios from "../../api/axios";

// import jwt from 'jsonwebtoken'

export default function Home (){
    const { auth, setAuth } = useAuth();
    // const token = React.useContext(AuthContext);
    const [data, setData] = useState([])

    setAuth(auth)
    const date = new Date()
    console.log(auth)
    const currentDate = date.toString().split(' ').slice(0, 4).join(' ')
    const currentTime = date.toString().split(' ').slice(4)[0]
    console.log(currentDate)
    console.log(currentTime)
    const userName = auth.name

    const carrot = require('../../imgs/vegetables/carrot.png');

    

    useEffect(() =>{
        const token = localStorage.getItem('token')
        // const userID = jwtDecode(accessToken)._id
        const config = {
                headers: { Authorization: `Bearer ${token}` }
            
          };
        async function getRecipes(event){
            axios.get(`http://localhost:2121/api/event/find/recipes-of-the-day/${currentDate}`, config)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
        
                console.log(err)
            })
        }

        getRecipes()

            
            }, [])

            console.log(data)

   

    // sort the data by times
    
        const sortedData= data.sort((a, b) => {

                //  a = Number(a.timePlanned.replace(':', '').replace('  ', ''))
                //  b = Number(b.timePlanned.replace(':', '').replace('  ', ''))
                return  a.timePlanned.localeCompare(b.timePlanned)
            
                }).filter((element) => {
            if (currentTime <= element.timePlanned) {
                return element
            }
        }).map(el => {
            return (
                 <section className="home-recipe" style={ el.image && { backgroundImage: `url(${ el.image })`}}>
                    {/* <img src={nextRecipe.image} alt='recipe img' /> */}
                    <h1>{ el.recipeName }</h1>
                    <p>- { el.timePlanned }</p>
                </section>

            )
        })
    

   
    



     
   
    console.log(sortedData)
    
    // get image of first item in sorted data
    const nextRecipe = sortedData[0]


    // console.log(token?.user)
   
    return (
        <section className="home section-container">
            <div className="header home-header">
                <h1 className="header-title">Hi { userName }!</h1>
                <img src={carrot} alt='' className="header-img"/>
            </div>
            <div className="content header-content">

                { sortedData.length === 0? 
                    <>
                        <p className="home-message">
                            <span>No recipes for today!</span>
                            <span className="home-message-inner">..please go to the calendar and <span>+</span> a recipe</span>
                            </p>
                    </> 
                    : sortedData
                    }
                

                <Navigate />


            </div>
          
        </section>
    )
}