import Backendless from "backendless";
import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function Newsale({ logedin, setloged }) {

    const [clientslist, setclientslist]=useState()
    useEffect(() => {
     Backendless.Data.of("Allclients").find()
     .then(res=>setclientslist(res))
     .catch(error=>console.log(error))
    }, [])
    
    function savenewsale(e) {
        e.preventDefault();
        const name = e.target.ClientName.value
        const summ = e.target.Summ.value
        const salesdate = e.target.salesdate.value
        e.target.Summ.value = ""
        console.log(name, summ, salesdate);
        const savedSale = {
          ClientName: name,
          salesdate: salesdate,
          Summ: summ
        };
        
       
​

​
        Backendless.Data.of("Salesrecords")
          .save(savedSale)
          .then((res) => {
            console.log(res);
          })
          .catch((e) => console.log(e));
    }
    var connectedsale = res.objectID
    var soldname=res.name
    Backendless.Data.of( "Salesrecords" ).addRelation( connectedsale, "Client", [soldname] )
    .then( function( count ) {
      console.log( "relation has been set" );
    })
    .catch( function( error ) {
      console.log( "server reported an error - " + error.message );
    })
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create a new sale now!</h1>
            <div class="avatar">
              <div class="w-48 rounded">
                <img src="https://www.americanexpress.com/de-de/kampagnen/guide/media/cache/default/cms/2023/07/asset-deal.jpg" />
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={savenewsale}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Client name</span>
                </label>
                <select name="ClientName">
{clientslist && clientslist.map(itemlist=><option value={itemlist.ClientName}>  {itemlist.ClientName}</option>)}

                </select>
                {/* <input name="ClientName"
            
                  type="text"
                  placeholder="put a name and last name"
                  className="input input-bordered"
                  required
                /> */}
              </div>
              
              <div class="inline-block relative w-64">
                
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sale amount</span>
                  </label>

                  <input
                    name="Summ"
                    type="text"
                    placeholder="10"
                    className="input input-bordered"
                    required
            
                  />
                <input
                    name="salesdate"
                    type="date"
                    placeholder="10"
                    className="input input-bordered"
                    required
            
                  />
                </div>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Create a new sale
                </button>
              </div>
            </form>
            
           
          </div>
        </div>
      </div>
    </div>
  );
            }
export default Newsale