import React from "react";
import '../../css/ShowIngredients.css'

export default function ShowIngredients({ name, amount }){

    return(
        <div className="show-ingredients" >
            
            <span className="show-ingredients--left">{ name }</span>
            <span  className="show-ingredients--right">{ amount }</span>
           
        </div>
    )
}