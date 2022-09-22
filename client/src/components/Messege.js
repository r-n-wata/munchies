import React, {useState, useEffect} from "react";
import '../css/MessageBox.css'

export default function MessageBox({ status, message }){
    const [alert, setAlert] = useState(true);
      
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  }, []);
      
    return(
        <>
          {alert && 
            <div className="message-box-container">
                <div className="message-box-inner-container">
                    <h2 className="nessage-title">{ status }</h2>

                    <p className="message">{ message }</p>

                </div> 
            </div>
        }
        </>
      
    )
}