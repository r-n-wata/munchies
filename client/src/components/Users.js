import { useState, useEffect } from "react"
import axios from "../api/axios"


export default function User (){
    
    const [users, setUsers] = useState()

    useEffect(() =>{
        let isMounted = true;
        // cancels our request of the component unmountes
        const controller = new AbortController();

        const getUser = async () =>{
            try{

                const res = await axios.get('/api/user/login', {
                    signal: controller.signal
                });
                console.log(res.data)
                isMounted && setUsers(res.data)
            }catch(err){
                console.error(err)

            }
        }

        getUser()
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []
    )

    
    return (
        <article>
            <h2>Users</h2>
            {users?.length ? 
                (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                        </ul>
                ) : 
                <p>No users to display</p>
                }
        </article>
    )
}