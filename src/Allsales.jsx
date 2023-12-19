import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Allsales({logedin,setloged, setallsales,allsales}) {
  // const [allsales, setallsales] = useState();
  const navigate = useNavigate()
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
  function logout() {
    Backendless.UserService.logout()
   .then((res) => {
    setloged(false)
   navigate ("/")
  })
  .catch((error) => console.log(error));}

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
  //   if (!logedin) {

  //     navigate('/') 
  //  }
  //  else {
  //   seeallsales()
  //   }
  // },[]
  //   )
    // function categoryFilter () {

    //   setallsales(i => allsales.filter(sale => sale.Client.Category != "Retail"))
    // }
    // useEffect(()=>{
    //     if (!logedin) {
    
    //       navigate('/') 
    //    }
    //    else {
    //     seeallsales()
    //     }
    //   },[]
    //   )
    // function categoryFilterretail () {


    //   setallsales(i => allsales.filter(sale => sale.Client.Category == "Retail"))
    // }
    
  return (
<div className='overflow-x-auto'>

  {/* <button onClick={categoryFilter}>filter B2B</button>
  <button onClick={categoryFilterretail}>filter retail</button> */}
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
    {allsales && allsales.map 
        (sale =>{
          return(  <tr>
            <td>{sale.number}</td>
            <td>{sale.Client.ClientName}</td> 
            <td>
              {/* {(new Date(sale.salesdate)).getFullYear() }/ */}
              {/* {(new Date(sale.salesdate)).getMonth()}/ */}
              {/* {(new Date(sale.salesdate)).getDay()} */}
              {( new Date(sale.salesdate).toDateString())}
              </td>
            <td>{sale.Summ}</td>     
             
        
          <td>{sale.Client.Category}</td>    
              
              </tr>
    
            )
            
          }
          
          )}
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



   

export default Allsales;
