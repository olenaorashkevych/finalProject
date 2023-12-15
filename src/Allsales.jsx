import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Allsales({logedin,setloged}) {
  const [allsales, setallsales] = useState();
  const navigate = useNavigate();
    
  function logout() {
      Backendless.UserService.logout()
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro));
      setloged(false);
            }

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

      setallsales(i => allsales.filter(sale => sale.Client.Category != "Designer"))
    }
    
  return (
<div className='overflow-x-auto'>
  <button onClick={categoryFilter}>filter</button>
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
            <td>{sale.Summ}</td>     
            <td>{sale.number}</td> 
          <td>{sale.Client.ClientName}</td> 
            <td>{sale.saledate}</td>  
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
