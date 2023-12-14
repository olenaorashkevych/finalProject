import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Backendless from "backendless";



function AllClients({logedin,setloged}) {
const [Clients, setClients] = useState('')
const navigate=useNavigate()

function logout() {
Backendless.UserService.logout()
.then((res) => console.log(res))
.catch((erro) => console.log(erro));
setloged(false);
      }
function seeallclients() {
Backendless.Data.of( "Allclients" ).find()
.then(  response => {console.log(response)
setClients(response);}

) 
.catch( function( error )
 {}); 
}
 


useEffect(()=>{
if (!logedin) {

   navigate('/erropage') 
}
else {
    seeallclients()
}
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
    {Clients && Clients.map
    (Client=>{
      return(
     
       
            <tr>
        <td>{Client.ClientName}</td> 

        <td>{Client.Email}</td>    
        <td>{Client.Source}</td>    
        <td>{Client.Category}</td>    
        <td>{Client.Phone_number}</td>    
        <td>{Client.Discount}</td>    
        <td>{Client.created}</td>  
          </tr>

        )
        
      }
      
      )}
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

<button>Logout</button>
    
   
    </div>
  )
}

export default AllClients