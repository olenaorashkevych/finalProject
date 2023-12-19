import Backendless from 'backendless';
import './App.css';
import {  Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react'
import NewClient from './NewClient';
import AllClients from './AllClients';
import Addorseedatabase from './Addorseedatabase';
import Loginpage from './Loginpage';
import Errorpage from './Errorpage';
import Allsales from './Allsales';
import Report from './Report';
import Newsale from './Newsale';
import Calls from './Calls';




function App() {
  const [logedin, setloged] = useState(true);
  const [allsales, setallsales] = useState();
  
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( process.env.REACT_APP_ID, process.env.REACT_APP_JS_API_KEY );
  

  // function seeallsales() {
  //   Backendless.Data.of("Salesrecords")
  //     .find({relations:["Client"]
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setallsales(response);
  //     })
  //     .catch(function (error) {});
  // }
  // useEffect(()=>{
  //   seeallsales()
  //   },[]
  //   )
  return (
   
 
    <div className="App">
      <Routes>
        <Route path='/allsales' element={<Allsales logedin={logedin}setloged={setloged} allsales={allsales}setallsales={setallsales}/> } />
        <Route path="/allclients" element={<AllClients logedin={logedin}setloged={setloged}/>}> </Route>
        <Route path="/newclient" element={<NewClient logedin={logedin} setloged={setloged}/>}> </Route>
        <Route path="/addorseeclients" element={<Addorseedatabase/>}></Route>
        <Route  path="/" element={<Loginpage logedin={logedin} setloged={setloged}/>}></Route>
        <Route  path="/errorpage" element={<Errorpage/>}></Route>
        <Route  path="/report" element={<Report allsales={allsales} setallsales={setallsales}logedin={logedin}setloged={setloged}/>}></Route>
        <Route  path="/newsale" element={<Newsale allsales={allsales} setallsales={setallsales}logedin={logedin}setloged={setloged}/>}></Route>
        <Route  path="/calls" element={<Calls allsales={allsales} setallsales={setallsales}logedin={logedin}setloged={setloged}/>}></Route>
      </Routes>
    </div>
  );
    }


export default App;
