import Backendless from 'backendless';
import './App.css';
import {  Route, Routes} from 'react-router-dom';
import { useState } from 'react'
import NewClient from './NewClient';
import AllClients from './AllClients';
import Addorseedatabase from './Addorseedatabase';
import Loginpage from './Loginpage';
import Errorpage from './Errorpage';



function App() {
  const [logedin, setloged] = useState(false);
  
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( process.env.REACT_APP_ID, process.env.REACT_APP_JS_API_KEY );
  
  return (
   
 
    <div className="App">
      <Routes>
        <Route path="/allclients" element={<AllClients logedin={logedin}setloged={setloged}/>}> </Route>
        <Route path="/newclient" element={<NewClient logedin={logedin} setloged={setloged}/>}> </Route>
        <Route path="/addorseeclients" element={<Addorseedatabase/>}></Route>
        <Route  path="/" element={<Loginpage logedin={logedin} setloged={setloged}/>}></Route>
        <Route  path="/errorpage" element={<Errorpage/>}></Route>

      </Routes>
    </div>
  );
    }


export default App;
