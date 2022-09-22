import { React, useEffect, useState} from "react";
import { Calendar } from 'react-calendar';
import Time from "./Time";
import 'react-calendar/dist/Calendar.css';




export default function Calender({ setSelectedDate }){

    
    const [date, setDate] = useState(new Date());
         
    const onChange = date => {
        setDate(date)
        setSelectedDate(date.toString().split(' ').slice(0, 4).join(' '))


                
    }

    return(
        <>
       

             <Calendar 
                onChange={onChange} 
                value={date} 
                className='calender'
                defaultView='month'
                maxDetail= 'month'
                
                />   
    
            
           
            <p>
                <span>Default selected date:</span>{date.toDateString()}
            </p> 
             
            



       
      
         </>
     )

}

