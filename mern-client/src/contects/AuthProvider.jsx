// import React, { Children, createContext, useEffect, useState } from 'react'
// import app from '../firebase/firebase.config';
// import { getAuth } from "firebase/auth";

// export const AuthContext = createContext ();
// const auth = getAuth(app);


// const AuthProvider = ({children}) => {
//     const [ user, setUser] = useState(null);
//     const[loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     // const signUpGmail = () => {
//     //     return signInWit
//     // }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log(currentUser);
//         })
//     },[])
//     const authInfo = {
//         user,
//         createUser 
//     }
//   return (
//     <AuthContext.Provider value={authInfo}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider

// import React, { createContext, useEffect, useState } from 'react';
// import app from '../firebase/firebase.config';
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleprovider = new GoogleAuthProvider();


// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then(userCredential => {
//                 // You may set user state here if needed
//                 return userCredential.user;
//             })
//             .catch(error => {
//                 console.error('Error creating user:', error);
//                 throw error; // Rethrow the error so that the caller can handle it
//             });
//     }

//     const loginwithGoogle = ()=>{
//         setLoading(true);
//         return signInWithPopup(auth, googleprovider)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser); // Set user state based on authentication state change
//             setLoading(false); // Once auth state changes, loading is done
//         });

//         // Clean up subscription on unmount
//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         loginwithGoogle
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthProvider;


// import React, { createContext, useEffect, useState } from 'react';
// import app from '../firebase/firebase.config';
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { getAuth, logOut } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider(); // Corrected variable name

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then(userCredential => {
//                 setUser(userCredential.user);
//                 setLoading(false);
//                 return userCredential.user;
//             })
//             .catch(error => {
//                 console.error('Error creating user:', error);
//                 throw error;
//             });
//     }

//     const loginWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//             .then(userCredential => {
//                 setUser(userCredential.user);
//                 setLoading(false);
//                 return userCredential.user;
//             })
//             .catch(error => {
//                 console.error('Error signing in with Google:', error);
//                 throw error;
//             });
//     }

//     const login = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }


//     const logOut =()=>{
//         return logOut(auth)

//     }

    

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         loginWithGoogle, // Corrected function name
//         loading,
//         login,
//         logOut
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export default AuthProvider;


import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential.user;
            })
            .catch(error => {
                console.error('Error creating user:', error);
                throw error;
            });
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential.user;
            })
            .catch(error => {
                console.error('Error signing in with Google:', error);
                throw error;
            });
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user);
                setLoading(false);
                return userCredential.user;
            })
            .catch(error => {
                console.error('Error logging in:', error);
                throw error;
            });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error logging out:', error);
                throw error;
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginWithGoogle,
        login,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
