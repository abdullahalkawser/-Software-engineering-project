import React, { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // const authContext = useContext(AuthContext);
  // console.log(authContext)
  const {creacteUser} = useContext(AuthContext);
 
  const navigate = useNavigate()

  const handle = (e) => {
    
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    console.log(email, password);


    //create usre in fire init

    creacteUser(email, password)
    .then((result) => {
            // reset feild
      
            e.target.reset();
            navigate("/Login");
      // Signed up 
      const user = result.user;
      console.log(user)
     
    })
    .catch((error) => {

      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });


  };



  return (
    <div>
            <h1 className='text-center text-3xl'>Singup</h1>
      <div className="hero min-h-screen bg-base-200">
  
        <form className="card-body" onSubmit={handle}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
