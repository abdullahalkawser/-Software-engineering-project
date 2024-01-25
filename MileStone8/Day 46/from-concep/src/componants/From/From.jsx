import React from 'react';

const From = () => {
    const handlesubmit = (e)=>{
        e.preventDefault()

        // name to  value accses from
        
        console.log(e.target.text.value)
        console.log(e.target.eamil.value)
        console.log(e.target.text.value)
    }
    return (
        <div>
         <form onSubmit={handlesubmit}>
         <input type="text" name="text" /> <br />
            <input type="email" name="eamil" /> <br />
            <input type="submit" value="submit" />
         </form>
        </div>
    );
};

export default From;