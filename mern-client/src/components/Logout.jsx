// import React, { useContext } from 'react'
// import { AuthContext } from '../contects/AuthProvider'
// import { useLocation, useNavigate } from 'react-router-dom';


// const Logout = () => {
//     const {logOut} = useContext (AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || "/";

//     const handleLogout = () =>{
//         logOut().then(() => {
//             alert("Log out successfully");
//             navigate(from, { replace: true }); 
//             // Sign-out successful.
//           }).catch((error) => {
//             // An error happened.
//           });

//     }
//   return (
//     <div className='h-screen bg-teal-100 flex items-center justify-center'>
//         <button className='bg-red-600 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }


import React, { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/";

    const handleLogout = async () => {
        try {
            await logOut();
            alert("Logged out successfully");
            navigate(from, { replace: true });
        } catch (error) {
            console.error("Error logging out:", error);
            // Handle error as needed
        }
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-600 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;

