import Backendless from 'backendless';
import './App.css';
import {  Route, Routes} from 'react-router-dom';
import { useState } from 'react'
import NewClient from './NewClient';
import AllClients from './AllClients';
import Addorseedatabase from './Addorseedatabase';
import Loginpage from './Loginpage';


function App() {
  

  return (
   
 
    <div className="App">
      {/* <Loginpage /> */}
      <Routes>
        <Route path="/allclients" element={<AllClients/>}> </Route>
        <Route path="/newclient" element={<NewClient/>}> </Route>
        <Route path="/addorseeclients" element={<Addorseedatabase/>}></Route>
        <Route  path="/" element={<Loginpage/>}></Route>
      </Routes>
    </div>
  );
    }


export default App;
