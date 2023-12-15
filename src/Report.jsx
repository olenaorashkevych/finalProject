
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
              
      </tr>
  </thead>   
  <tbody>

    {categoryfilter? categoryfilter.map(sale => <p>{sale.Summ}</p>) : allsales && allsales.map 
          (sale => (<div>
        <p>{sale.number}</p>
          <p>{sale.Client.ClientName}</p>
          <p>{sale.saledate}</p>
          <p>{sale.Summ}</p>
          <p>{sale.Client.Source}</p>

          </div>
          
          
          


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