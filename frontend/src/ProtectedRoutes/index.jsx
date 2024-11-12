// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Outlet, Router, Routes, useNavigate } from "react-router-dom";

// function ProtectedRoutes() {
//     const [user,setUser] = useState({});
//     const navigate = useNavigate();
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         console.log(token);
//         axios.get('http://localhost:3002/'+token).then((res) => {
//             console.log(res);
//             setUser(res.data);
//         }).catch((err) => {
//             console.log(err);
//             navigate('/')
//         })
//     },[])
//     return(
//         <>
//         </>
//     )
// }

// export default ProtectedRoutes;

import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider'; // Adjust path as necessary
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    // console.log(isAuthenticated)
    if (!isAuthenticated) {
        
        return <Navigate to="/login" replace/> // Redirect or show message
    }

    return  children ? children : <Outlet />; ; // Render children if authenticated
};

export default ProtectedRoute;