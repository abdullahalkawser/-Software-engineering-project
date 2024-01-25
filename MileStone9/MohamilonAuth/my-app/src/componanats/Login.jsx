import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Provider';

const Login = () => {
  const {creactLogin,Googlelogin} = useContext(AuthContext)

  const navigate = useNavigate();
  const handles = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // console.log(email, password);

    
    creactLogin(email, password)
    .then((result) => {
      // reset feild

      e.target.reset();

      // Signed up 
      navigate("/Home");
      const user = result.user;
      console.log(user)
     
    })
    .catch((error) => {

      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });


  };

  const handlegoogle = () => {
    Googlelogin()
    .then((result) => {

      const user = result.user;
      console.log(user)
     
    })
    .catch((error) => {

      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handles}>
              <div className="form-control">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>New to This Website? <Link to='/Register'>Please Register</Link></p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={handlegoogle} className="btn btn-primary">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
