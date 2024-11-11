import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Router, Routes, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        axios.get('http://localhost:3002/'+token).then((res) => {
            console.log(res);
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
            navigate('/')
        })
    },[])
    return(
        <>
        </>
    )
}

export default ProtectedRoutes;