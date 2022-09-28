import React, { useEffect, useState } from "react";
import Navigate from "../Navigation/Navigation";
import useAuth from '../../hooks/useAuth'
import '../../css/Home.css'
import axios from "../../api/axios";
import Header from "../Section-header";

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

            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])

            console.log(data)

   

    // sort the data by times
    
        const sortedData= data.sort((a, b) => {

                //  a = Number(a.timePlanned.replace(':', '').replace('  ', ''))
                //  b = Number(b.timePlanned.replace(':', '').replace('  ', ''))
                return  a.timePlanned.localeCompare(b.timePlanned)
            
                }).filter((element) => currentTime <= element.timePlanned && element
            
        ).map(el => {
            return (
                 <section className="home-recipe" style={ el.image && { backgroundImage: `url(${ el.image })`}}>
                    {/* <img src={nextRecipe.image} alt='recipe img' /> */}
                    <h1>{ el.recipeName }</h1>
                    <p>- { el.timePlanned }</p>
                </section>

            )
        })
    

   
    



     
   
    console.log(sortedData)
    
 


    // console.log(token?.user)
   
    return (
        <section className="relative h-screen desktop:w-4/5 desktop:absolute desktop:right-0 overflow-y-hidden ">

            <Header
                title = { `Hi ${ userName }!`}
                image = { carrot }
                color= { 'green' }
            />
            <div className="h-5/6 w-full absolute z-10 bottom-0 rounded-t-3xl bg-gray-100 overflow-y-scroll pb-20">

                { sortedData.length === 0? 
                    <>
                        <p className="home-message desktop:m-40">
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