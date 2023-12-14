import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Backendless from "backendless";

function Allsales() {
  const [allsales, setallsales] = useState();
  const navigate = useNavigate();
  //   function logout() {
  //     Backendless.UserService.logout()
  //     .then((res) => console.log(res))
  //     .catch((erro) => console.log(erro));
  //     setloged(false);
  //           }

  function seeallsales() {
    Backendless.Data.of("Salesrecords")
      .find()
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
    

  return (
<div className='overflow-x-auto'>
<table className="table table-xs ">
<thead>
   <tr>
            <th>Client Name</th>
            <th>Client Email</th>
            <th>Source of Information</th>
            <th>Client Category</th>
            <th>Client Phone Number</th>
            <th>Basic Discount</th>
            <th>Date of Creation</th>
    </tr>
</thead>   
<tbody>
    {allsales && allsales.map 
        (sale => <p>{sale.Summ}</p>

    )

    }

</tbody>
    
    
    <tfoot>
    <tr>
            <th>Client Name</th>
            <th>Client Email</th>
            <th>Source of Information</th>
            <th>Client Category</th>
            <th>Client Phone Number</th>
            <th>Basic Discount</th>
            <th>Date of Creation</th>

        </tr>
    </tfoot>
    </table>
<button>Log out</button>

    
   
    </div>
  )
}



   

export default Allsales;
