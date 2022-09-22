
import { React, useEffect, useState} from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import { alpha } from '@material-ui/core/styles'


export default function Calendar ( { setSelectedTime } ) {
    const [ selectedDate, setSelectedDate] = useState(new Date())
    const hours = selectedDate.getHours()
    const minutes = selectedDate.getMinutes()
    const seconds = selectedDate.getSeconds()
    useEffect(() =>{
       setSelectedTime(`${hours}:${minutes}:${seconds}`) 
    }, [seconds])
    
    
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
