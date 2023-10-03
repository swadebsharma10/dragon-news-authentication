import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);

    // create user
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    


    // logOut
    const logOut =()=>{
       return  signOut(auth);
    }


    // observer
    useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('observer', currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }

    }, [])
    
 

    const authInfo ={
        user,
        createUser,
        signInUser,
        logOut
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    
    children: PropTypes.node,
}