import React from 'react'

export default function Header({ title, image, color }){
    console.log(color)
    return (
        <div className={`relative flex justify-between send-back w-full bg-green-600 h-1/4 -z-10  pl-10 pt-10`}>
                <h1 className="  w-2/5 text-2xl text-gray-100 font-title">{ title }</h1>
                
                <img src={ image } alt='' className="w-40 absolute -right-2 -top-2 desktop:right-8"/>
                
            </div>
    )
}