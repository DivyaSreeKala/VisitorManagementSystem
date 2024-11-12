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

import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

     // Function to log in a user
     const login = async (credentials) => {
        try {
            console.log(credentials)
            const response = await axios.post('http://localhost:3002/login', credentials);
            console.log(response)
            if(response.data.token){
                alert("Login Successfull")
                const { token, role } = response.data; // Assuming your API returns a token and user object
                localStorage.setItem('token', token); // Store token in local storage
                setUser(user); // Set user state
                setIsAuthenticated(true); // Update authentication status
                return role;
            }
            alert(response.data)
            return
        } catch (error) {
            alert("Error Logging In")
            console.error("Login failed:", error);
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    // Function to log out a user
    const logout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        setUser(null); // Clear user state
        setIsAuthenticated(false); // Update authentication status
    };

    useEffect(() => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user details using the token
            axios.get('http://localhost:3002/login/authenticate',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data.user);
                setIsAuthenticated(true);
                setUser(res.data.user);
                setUsername(res.data.user.fullName);
                setRole(res.data.user.role)
                setUser(null);
                setIsAuthenticated(false);

            }).catch((err) => {
                console.log(err);
                setUser(null);
                setIsAuthenticated(false);
            }).finally(()=> {
                setIsLoaded(true);
            })
            // fetchUserDetails(token);
        } else {
            setIsLoaded(true);
        }
    }, []);

    // const fetchUserDetails = async (token) => {
    //     try {
    //         const response = await fetch('http://localhost:3002/'+token, {
    //             method: 'GET',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         if (response.ok) {
    //             const data = await response.json();
    //             setUser(data.user); // Assuming the response contains user data
    //             setIsAuthenticated(true);
    //         } else {
    //             setUser(null);
    //             setIsAuthenticated(false);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching user details:', error);
    //         setUser(null);
    //         setIsAuthenticated(false);
    //     } finally {
    //         setIsLoaded(true);
    //     }
    // };

    return (
        <AuthContext.Provider value={{ username, role, isAuthenticated, login, logout }}>
            {isLoaded ? children : <h5>Loading...</h5>}
        </AuthContext.Provider>
    );
};
//https://www.perplexity.ai/search/how-to-write-a-component-to-st-ilCxJn65Qn6xGatq6WqBhg