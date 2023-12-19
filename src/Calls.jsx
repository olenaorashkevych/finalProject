import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Calls({allsales, setallsales,logedin, setloged}) {
    
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
    function filternotactive (e) {
        e.preventDefault();
        let startdate=e.target.startdate.value
      let enddate=e.target.enddate.value
        console.log(startdate);
        console.log(enddate);
        seeallsales()
       setallsales(i => allsales.filter(sale => Date.parse(sale.salesdate) 
    //    <= Date.parse(startdate) && sale.salesdate 
       >= enddate))
            
            //  check if the sale.salesdate  between enddate and startdate
            // then check if the clinet have more than one task
            
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
  return (
    <div>
        
    {allsales? allsales.map(sale => <tr><td>{sale.Client.ClientName}</td><td> {new Date(sale.salesdate).toDateString()}</td>{sale.Summ} <td>{sale.Client.Category}</td></tr>) : allsales && allsales.map 
          (sale => (<tr>
        <td>{sale.number}</td>
          <td>{sale.Client.ClientName}</td>
          <td>{ (new Date(sale.salesdate).toDateString()) }</td>
          <td>{sale.Summ}</td>
          <td>{sale.Client.Category}</td>
          </tr>))}



          <form onSubmit={filternotactive}>
          <label className="label">
        <span className="label-text">Since</span>
                
        <input type='date'name="startdate"></input> <label className="label">

        </label>
        <span className="label-text">Till</span>
        <input type='date'name="enddate"></input> 
        </label>
        
        <button type="submit">Filter not active during this date range</button>
        <button type="submit">Filter not active during this date range</button>

        </form>
        
 </div>
  )
}

export default Calls
