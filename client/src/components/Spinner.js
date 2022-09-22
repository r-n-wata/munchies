import React from "react";


export default function Spinner ({ loading }) {
    const loadingIcon = require('../imgs/loading-icon.gif')


    return (
        <>
            <div className="recipe-small-card">
                <img src={loadingIcon} alt="" className="recipe-img"/>
                {/* <h2 className="recipe-card-title">{name}</h2> */}
            
                </div>
          
        
        </>
    )
}