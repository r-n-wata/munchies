
import { React, useEffect, useState } from "react";



export default function Calendar ( { setSelectedTime } ) {
 

    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')

    useEffect(() =>{
       setSelectedTime(`${hours}:${minutes}`) 
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hours ])
    
    
    return (
        <div className="time-container flex justify-center items-center">
          <span className="pr-4 h-full flex items-center">Time</span>
          <div class="mt-2 p-5 w-1/8  bg-white rounded-lg shadow-xl">
            <div class="flex">
              <select name="hours" class="bg-transparent text-xl appearance-none outline-none" onChange={(e) => setHours(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">10</option>
                <option value="12">12</option>
                <option value="12">13</option>
                <option value="12">14</option>
                <option value="12">15</option>
                <option value="12">16</option>
                <option value="12">17</option>
                <option value="12">18</option>
                <option value="12">19</option>
                <option value="12">20</option>
                <option value="12">21</option>
                <option value="12">22</option>
                <option value="12">23</option>
                <option value="12">00</option>

              </select>
              <span class="text-xl mr-3">:</span>
              <select name="minutes" class="bg-transparent text-lg appearance-none outline-none mr-4" onChange={(e) => setMinutes(e.target.value)}>
                <option value="0">00</option>
                <option value="30">30</option>
              </select>
              {/* <select name="ampm" class="bg-transparent text-lg appearance-none outline-none">
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select> */}
            </div>
          </div>
                      
        
        </div>
    )
}
