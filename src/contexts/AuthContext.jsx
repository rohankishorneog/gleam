import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const signup = async ({ firstName, lastName, username, password }) => {
        try {
            const response = await axios.post(`/api/auth/signup`, {
                firstName,
                lastName,
                username,
                password
            });
        
            if (response.status === 201) {
                const { createdUser, encodedToken } = response.data;

                setLoggedInUser(createdUser);
                localStorage.setItem('token', encodedToken);
                toast.success('Signup successfull');
            } else {
                toast.error(response.message)
            }

        } catch (error) {
            toast.error(error)
        }
    };

    const login = async ({ username, password }) => {
        try {
            const response = await axios.post(`/api/auth/login`, {
                username,
                password
            });
            if (response.status === 200) {
                const { foundUser, encodedToken } = response.data;
                console.log(foundUser)
                localStorage.setItem('token', encodedToken);
                setLoggedInUser(foundUser);
                toast.success("Login successful")
            }

        } catch (error) {
            toast.error(error);
        }
    };
    const logout=()=>{
        setLoggedInUser(null);
        localStorage.removeItem('token');
        toast.success("Logout successful");
    }

    return (
        <AuthContext.Provider value={{ loggedInUser,setLoggedInUser ,signup, login, logout }}>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </AuthContext.Provider>
    );
};
