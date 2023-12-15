
import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Report({allsales, setallsales,logedin, setloged}) {
    const [categoryfilter,setcategoryfilter]=useState()
    const navigate=useNavigate()
    function logout() {
        Backendless.UserService.logout()
        .then((res) => {
        setloged(false)
       navigate ("/errorpage")
      }
        )
        .catch((erro) => console.log(erro));
        
              }
    function categoryFilterdes () {

        setcategoryfilter(sale => allsales.filter(sale => sale.Client.Category != "Retail"))
        
      }
      
  return (
    <div className='overflow-x-auto'>
    <button onClick={categoryFilterdes}>All B2B Sales</button>
  <table className="table table-xs ">
  <thead>
     <tr>
              <th>Number</th>
              <th>Client</th>
              <th>Sale date</th>
              <th>Summ</th>
              <th>Source</th>
              
      </tr>
  </thead>   
  <tbody>

    {categoryfilter? categoryfilter.map(sale => <tr><td>{sale.number}</td><td>{sale.Client.ClientName}</td><td>  {(new Date(sale.salesdate)).getDay()}/{(new Date(sale.salesdate)).getMonth()}/{(new Date(sale.salesdate)).getFullYear()}</td>{sale.Summ} <td>{sale.Client.Source}</td></tr>) : allsales && allsales.map 
          (sale => (<tr>
        <td>{sale.number}</td>
          <td>{sale.Client.ClientName}</td>
          <td>{(new Date(sale.salesdate)).getFullYear() }/{(new Date(sale.salesdate)).getMonth()}/{(new Date(sale.salesdate)).getDay()}</td>
          <td>{sale.Summ}</td>
          <td>{sale.Client.Source}</td>
          </tr>))}
    
      {/* {} */}
  
  </tbody>
      
      
      <tfoot>
      <tr>
      <th>Number</th>
      <th>Client</th>
      <th>Sale date</th>
      <th>Summ</th>
  
          </tr>
      </tfoot>
      </table>
   
  <button  onClick={logout} className="btn btn-primary linK">Log out</button>
  {/* <button onClick={filternotactive} className="btn btn-primary linK"> Remind me to call these clients</button> */}
  
      
     
      </div>
    )
  }

export default Report