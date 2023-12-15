import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';

function Addorseedatabase() {
  return (
    <div className='twonavigationlinks'>
    <Link to="/allclients" className="btn btn-primary linK" >See all clients</Link>
    <Link to="/newclient"className="btn btn-primary linK">Create a new client</Link>
    <Link to="/allsales"className="btn btn-primary linK">See sales records</Link>
    <Link to="/report"className="btn btn-primary linK">See the Report</Link>




    </div>
  )
}

export default Addorseedatabase