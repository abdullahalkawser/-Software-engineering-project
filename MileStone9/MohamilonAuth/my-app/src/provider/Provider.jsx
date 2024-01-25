import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import auth from '../firebase/fire.int';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null)


const provider = new GoogleAuthProvider();

const Provider = ({children}) => {
    const [user,setUser]= useState(null)

    const [loading,setloading]= useState(true)

    const creacteUser = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    
    }

    const creactLogin = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    
    }
    const Googlelogin = () =>{
        setloading(true)
        return signInWithPopup(auth,provider)
    }
const logout = () =>{
    setloading(true)
    return signOut(auth)
}
 // observe auth state change 

useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth,currentuser =>{
        console.log('current value is observe this current user',currentuser)
        setUser(currentuser)
        setloading(false)
    })

    return() =>{
        unsubscibe()
    }
},[])






    const info = {user,loading,creacteUser,creactLogin,Googlelogin,logout}

 
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;