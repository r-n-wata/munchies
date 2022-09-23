import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredAuth = () =>{
    const { auth } = useAuth();

    const token = localStorage.getItem('token')

    console.log(auth.user)
    return (
        token
        ? <Outlet /> 
        :<Navigate to='/login'  />
    )
}
// state={{ from:location }} replace
export default RequiredAuth

