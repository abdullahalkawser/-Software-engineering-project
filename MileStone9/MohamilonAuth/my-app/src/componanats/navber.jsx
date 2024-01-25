import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/Provider';

const Naveber = () => {
  const {user,logout} = useContext(AuthContext)

  const handleloot = ()=>{
    logout()
    .then((result) => {
      // Signed up 
      const user = result.user;
      console.log(user)
     
    })
    .catch((error) => {

      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });

  }





    const navItems = <>
          <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/Login'>Login </Link></li>
            <li><Link to='/Register'>Signup </Link></li>
            <li><Link to='/ordar'>Orders</Link></li>
            {user && 
            <>
             <li><Link to='/Profile'>Profile</Link></li>
             <li><Link to='/Dashbord'>Dashbord</Link></li>

            </> }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
       <span>{user.email}</span>
       <a onClick={handleloot} className="btn btn-sm">SingOut</a>
      


      </>
       : <Link to='/Login'>Login</Link>
    }

    
  </div>
</div>
        </div>
    );
};

export default Naveber;