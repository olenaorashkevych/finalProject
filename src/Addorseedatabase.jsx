import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

function Addorseedatabase() {
  return (
    <div>
    <Link to="/allclients" className="btn btn-primary" >See all clients</Link>
    <Link to="/newclient"className="btn btn-primary">Create a new client</Link>




    </div>
  )
}

export default Addorseedatabase