import React, { useState } from 'react';

const StateFullText = () => {
    const [name,setname] = useState(null)
    const [email,setemail] = useState(null)
    const [password,setpassword] = useState(null)
    const [erreor,seterreor] = useState('')
    
    // control componanats


    const namechange = (e)=>{
        setname(e.target.value)

    }
    const emailchange = (e)=>{
        setemail(e.target.value)

    }
    const passwordchange = (e)=>{
        setpassword(e.target.value)

    }

    const submites = (e)=>{
        e.preventDefault()

        if(password.length <5 ){
          seterreor('password have must 7 cahreture')
        }
        else{
            seterreor('')
        }
        console.log(name,email,password)
    }
    return (
        <div>
        <form onSubmit={submites}>
         <input onChange={namechange} type="text" name="text" /> <br />
            <input onChange={emailchange} type="email" name="eamil" /> <br />
            <input onChange={passwordchange} type="password" name="password" /> <br />
            <input type="submit" value="submit" />
         </form>

         {
            erreor && <p>{erreor}</p>
         }
        </div>
    );
};

export default StateFullText;