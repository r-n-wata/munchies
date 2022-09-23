
import { React, useEffect, useState} from "react";
import {  TimePicker } from "@material-ui/pickers";



export default function Calendar ( { setSelectedTime } ) {
    const [ selectedDate, setSelectedDate] = useState(new Date())
    const hours = selectedDate.getHours()
    const minutes = selectedDate.getMinutes()
    const seconds = selectedDate.getSeconds()
    useEffect(() =>{
       setSelectedTime(`${hours}:${minutes}:${seconds}`) 
    }, [seconds || ''])
    
    
    return (
        <div className="time-container">
           
            <div className="group">
                 <label>Time</label>
                <TimePicker
                    value={ selectedDate }
                    onChange={ setSelectedDate}
                />
            </div>
            
        
        </div>
    )
}
