import React, { useState } from 'react';

import { GoogleAuthProvider,getAuth,signInWithPopup,signOut } from "firebase/auth";
import app from '../../Frebase/fire.int';

const Login = () => {
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();

    const [user,setUser]= useState(null)
    
    const handle = ()=> {
        signInWithPopup(auth,provider)
        .then((result) =>{
            const login = result.user;
            console.log(login)  
            setUser(login)

        })
        .catch((error) => {
            console.log(error)
          });

    }

    const handleSingOut = ()=>{
        signOut(auth)
        .then(() => {
            setUser(null)
          
          }).catch((error) => {
           console.log(error)
          });
    }

    return (
        <div>
        {
            user ?     <button onClick={handleSingOut}>SingOut</button>:
            <button onClick={handle}>Login</button>
        }

            {
                user && <div>
                    <h2>user : {user.displayName}</h2>
                    <p>email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div> 
    );
};

export default Login;