import React, { useEffect } from 'react';
import { useRef } from 'react';

const UseRefFrom = () => {


    // uncontrol componanats
    const nameref = useRef(null)
    const emailref = useRef(null)
    const passwordref = useRef(null)


    // input feild e jaiya  cursior thakbe
    useEffect(()=>{
        nameref.current.focus()
    },[])



    
    const submites = (e)=>{
        e.preventDefault()

        // if(password.length <5 ){
        //   seterreor('password have must 7 cahreture')
        // }
        // else{
        //     seterreor('')
        // }
        console.log(nameref.current.value)
        console.log(emailref.current.value)
        console.log(passwordref.current.value)
    }
    return (
        <div>
             <form onSubmit={submites}>
         <input ref={nameref}  type="text" name="text" /> <br />
            <input ref={emailref}  type="email" name="eamil" /> <br />
            <input ref={passwordref} type="password" name="password" /> <br />
            <input type="submit" value="submit" />
         </form>
        </div>
    );
};

export default UseRefFrom;