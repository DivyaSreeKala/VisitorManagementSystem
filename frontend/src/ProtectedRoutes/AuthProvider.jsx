// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import { Outlet, Router, Routes, useNavigate } from "react-router-dom";


// function AuthLogic() {
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

// export default AuthLogic;

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user details using the token
            fetchUserDetails(token);
        } else {
            setIsLoaded(true);
        }
    }, []);

    const fetchUserDetails = async (token) => {
        try {
            const response = await fetch('http://localhost:3002/'+token, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.user); // Assuming the response contains user data
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoaded(true);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {isLoaded ? children : <h1>Loading...</h1>}
        </AuthContext.Provider>
    );
};
//https://www.perplexity.ai/search/how-to-write-a-component-to-st-ilCxJn65Qn6xGatq6WqBhg