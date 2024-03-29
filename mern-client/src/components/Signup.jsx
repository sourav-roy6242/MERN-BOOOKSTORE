
// import React, { useContext, useState } from "react";       
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contects/AuthProvider";   
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Correct import
// import googlelogo from "../assets/banner-books/google-logo.svg"

// const Signup = () => {
//     const { createUser, loginwithGoogle } = useContext(AuthContext);
//     const [error, serError] = useState(null); // Initialize error state

//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || "/";

//     const handleSignUp = async (event) => { // Make the function asynchronous to use await
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const email = formData.get('email');
//         const password = formData.get('password');
        
//         try {
//             const auth = getAuth(); // Get the Auth object
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Create user
//             alert("Sign up successful");
//             navigate(from, { replace: true }); // Navigate to the desired location
//         } catch (error) {
//             serError(error.message); // Set error state if there's an error
//         }
//     };

//     //signup using google account

//     const handleRegister = () =>{
//         loginwithGoogle().then((result) => {
//             const user = result.user;
//             alert("Sign up successful")
//             navigate(from, { replace: true })
//         })
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold">
//                                 Sign Up Form
//                             </h1>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                             <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="relative">
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="text"
//                                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                         placeholder="Email address"
//                                     />
//                                 </div>
//                                 <div className="relative">
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                         placeholder="Password"
//                                     />
//                                 </div>
//                                 <p>If you have an account, please <Link to="/login" className="text-blue-600 underline">log in</Link> here.</p>
//                                 <div className="relative">
//                                     <button className="bg-blue-500 text-white rounded-md px-4 py-2">
//                                         Sign Up
//                                     </button>
//                                 </div>
//                             </form>
//                             {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
//                         </div>

//                         <hr/>
//                         <div className="flex w-full items-center flex-col mt-2 gap-3">
//                             <button onClick={handleRegister} className="block"><img src={googlelogo} alt="" className="w-12 h-12 inline-block" /> log in with Google</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;


import React, { useContext, useState } from "react";       
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";   
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Correct import
import googlelogo from "../assets/banner-books/google-logo.svg"

const Signup = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext); // Corrected function name
    const [error, setError] = useState(null); // Corrected typo in state variable name

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = async (event) => { // Make the function asynchronous to use await
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        
        try {
            const auth = getAuth(); // Get the Auth object
            const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Create user
            alert("Sign up successful");
            navigate(from, { replace: true }); // Navigate to the desired location
        } catch (error) {
            setError(error.message); // Set error state if there's an error
        }
    };

    // Signup using Google account
    const handleLoginWithGoogle = () => {
        loginWithGoogle().then(result => {
            const user = result.user; // Corrected accessing user from result
            alert("Sign up successful");
            navigate(from, { replace: true });
        }).catch(error => {
            setError(error.message); // Set error state if there's an error
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-4xl font-semibold">
                                Sign Up Form
                            </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="Password"
                                    />
                                </div>
                                <p>If you have an account, please <Link to="/login" className="text-blue-600 underline">log in</Link> here.</p>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
                        </div>

                        <hr/>
                        <div className="flex w-full items-center flex-col mt-2 gap-3">
                            <button onClick={handleLoginWithGoogle} className="block"><img src={googlelogo} alt="" className="w-12 h-12 inline-block" /> log in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
