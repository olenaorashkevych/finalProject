
import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Report({allsales, setallsales,logedin, setloged}) {
    // const [categoryfilter,setcategoryfilter]=useState()
    // const [retailsales, setretailsales]=useState()
  //  SUNDAY11111 // delete all the statuses, try do set only allsales as in all sales filters. if not, create all reports in all sales pge
    
    const navigate=useNavigate()
    function seeallsales() {
      Backendless.Data.of("Salesrecords")
        .find({relations:["Client"]
        })
        .then((response) => {
          console.log(response);
          setallsales(response);
        })
        .catch(function (error) {});
    }
    useEffect(()=>{
      seeallsales()
      },[]
      )
      function categoryFilter () {

        setallsales(i => allsales.filter(sale => sale.Client.Category != "Retail"))
      }
      useEffect(()=>{
          if (!logedin) {
      
            navigate('/') 
         }
         else {
          seeallsales()
          }
        },[]
        )
      function categoryFilterretail () {
  
  
        setallsales(i => allsales.filter(sale => sale.Client.Category == "Retail"))
      }
      
  return (<div className="flexiblecenter">
    <div className='overflow-x-auto'> 
    
  <table className="table table-xs ">
  <thead>
     <tr>
              <th>Number</th>
              <th>Client</th>
              <th>Sale date</th>
              <th>Summ</th>
              <th>Category</th>
              
      </tr>
  </thead>   
  <tbody>

    {allsales? allsales.map(sale => <tr><td>{sale.number}</td><td>{sale.Client.ClientName}</td><td>  {( new Date(sale.salesdate).toDateString())} </td>
      {sale.Summ} <td>{sale.Client.Category}</td></tr>) : allsales && allsales.map 
          (sale => (<tr>
        <td>{sale.number}</td>
          <td>{sale.Client.ClientName}</td>
          <td>{( new Date(sale.salesdate).toDateString())}</td>
          <td>{sale.Summ}</td>
          <td>{sale.Client.Category}</td>
          </tr>))}
    
      
  
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
   
  {/* <button  onClick={logout} className="btn btn-primary linK">Log out</button> */}
  <button className="btn btn-primary linK pushend" onClick={categoryFilter}>See business clients orders</button>
  <button className="btn btn-primary linK pushstart" onClick={categoryFilterretail}>See retail clients order</button>
  {/* <button className="btn btn-primary linK" onClick={categoryFilterretail}>See retail clients order</button> */}
      
     
      </div>
      </div>
    )
  }

export default Report