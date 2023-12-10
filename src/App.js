import Backendless from 'backendless';
import './App.css';
import {  Route, Routes} from 'react-router-dom';
import { useState } from 'react'




function App() {
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( process.env.REACT_APP_ID, process.env.REACT_APP_JS_API_KEY );
  const [logedin, setloged]=useState(false)
  const [email,setEmail] =useState("")
  const [password,setpassword] =useState("")
  function login(e) {
    e.preventDefault();
    Backendless.UserService.login(email ,password ,true)
    .then(
      res => console.log(res)
    ).catch(
      error => {
  
        if (error.code ===3003) {
          console.log("wrong password or email");
          
        }
        else{
          console.log("something went wrong");
        }
      }
    )
    setloged(true)
  }
  function logout() {
    Backendless.UserService.logout()
    .then(res => console.log(res))
    .catch (erro => console.log(erro))
    setloged(false)
  }
  
  function isLogin() {
    Backendless.UserService.isValidLogin()
    .then(
      res=>
      console.log(res)
    ).catch(error =>
      console.log(error))
    
  }

  function registration () {

    var user = new Backendless.User();
    user.email = "olenaorashkevych@gmail.com";
    user.password = "munich2024";

    Backendless.UserService.register(user)
      .then( res =>  console.log( "user has been registered" ) )
      .catch( err => {
        console.log( "error message - " + err.message )
        console.log( "error code - " + err.statusCode )
      } );
      function isLogin() {
  
        Backendless.UserService.isValidLogin()
        .then(
          res=>
          console.log(res)
        ).catch(error =>
          console.log(error))
        
      }
  }

  return (
    
 
    <div className="App">
 {logedin && logedin ? <div>
  <button type='click'onClick={logout}> Log out</button>
  <button type='click'onClick={isLogin}>Check myLogin</button> </div>
 :  <form onSubmit={login}>
        <input required type='email' onChange={(e)=> setEmail(e.target.value)} placeholder='email'/>
        <input type='password' onChange={(e)=> setpassword(e.target.value)} placeholder='password'></input>
        <button type='submit'>Login</button>
        
      </form>
      
      }
      
      {/* <Routes>
        <Route> </Route>
        <Route> </Route>
        <Route> </Route>
        <Route> </Route>
      </Routes> */}
    </div>
  );
    }


export default App;
