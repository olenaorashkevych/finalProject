import Backendless from 'backendless';
import './App.css';
import {  Route, Routes} from 'react-router-dom';
import { useState } from 'react';


function App() {
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( process.env.REACT_APP_ID, process.env.REACT_APP_JS_API_KEY );
  
  return (
    <div className="App">
      <Routes>
        <Route> </Route>
        <Route> </Route>
        <Route> </Route>
        <Route> </Route>
      </Routes>
    </div>
  );
}

export default App;
