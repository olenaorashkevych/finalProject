import React, { useState } from "react";
import Backendless from "backendless";
import { Route, Routes, useNavigate } from "react-router-dom";

function Loginpage({logedin,setloged}) {
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();


  function login(e) {
    e.preventDefault();
    Backendless.UserService.login(email, password, true)
      .then((res) => {
          console.log('loged1');
        setloged(true)

        navigate("/addorseeclients")
        console.log('loged');
        
      })
      .catch((error) => {
        if (error.code === 3003) {
            navigate("/errorpage")
         
        } else {
          console.log("something went wrong");
        }
      });
    
    
  }
  

//   function isLogin() {
//     Backendless.UserService.isValidLogin()
//       .then((res) => console.log(res))
//       .catch((error) => console.log(error));
//   }

  function registration() {
    var user = new Backendless.User();
    user.email = "olenaorashkevych@gmail.com";
    user.password = "munich2024";

    Backendless.UserService.register(user)
      .then((res) => console.log("user has been registered"))
      .catch((err) => {
        console.log("error message - " + err.message);
        console.log("error code - " + err.statusCode);
      });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Please fill in all the fields
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={login} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">

                <button type="submit" className="btn btn-primary">
                  Login
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
