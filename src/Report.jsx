
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Backendless from "backendless";



function Report({allsales, setallsales,logedin, setloged}) {
    const [categoryfilter,setcategoryfilter]=useState()
    function logout() {
        Backendless.UserService.logout()
        .then((res) => console.log(res))
        .catch((erro) => console.log(erro));
        setloged(false);
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

    {categoryfilter? categoryfilter.map(sale => <tr><td>{sale.number}</td><td>{sale.Client.ClientName}</td><td>{Date(sale.salesdate)}</td>{sale.Summ} <td>{sale.Client.Source}</td></tr>) : allsales && allsales.map 
          (sale => (<tr>
        <td>{sale.number}</td>
          <td>{sale.Client.ClientName}</td>
          <td>{Date(sale.salesdate)}</td>
          <td>{sale.Summ}</td>
          <td>{sale.Client.Source}</td>

          </tr>
          
          
          


          )
            
        
      
        )}
    
      {}
  
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
  
      
     
      </div>
    )
  }

export default Report