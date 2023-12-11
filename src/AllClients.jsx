import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Backendless from "backendless";
function AllClients({logedin,setloged}) {

    const navigate=useNavigate()
    function logout() {
    Backendless.UserService.logout()
    .then((res) => console.log(res))
    .catch((erro) => console.log(erro));
   setloged(false);
      }

useEffect(()=>{
    // what y need to do
if (!logedin) {
   navigate('/erropage') 
}
},[]
)

  return (
    <div>
        
    
<button type="click" onClick={logout}> Log out</button>



    </div>
  )
}

export default AllClients