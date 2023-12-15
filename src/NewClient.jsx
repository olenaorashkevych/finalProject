import Backendless from "backendless";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function NewClient({ logedin, setloged }) {
 
  function savetheclient(e) {
    e.preventDefault();
    const name = e.target.ClientName.value
    const email = e.target.Email.value
    const phone = e.target.Phone_number.value
    const category = e.target.category.value
    const source= e.target.source.value 
    const discount= e.target.discount.value
    e.target.Email.value = ""
    const savedClient = {
     
      ClientName: name,
      Email: email,
      Phone_number: phone,
      Source: source,
      Category: category,
      Discount: parseInt(discount)
    };
    
    Backendless.Data.of("Allclients")
      .save(savedClient)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create a new client now!</h1>
            <div class="avatar">
              <div class="w-48 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={(e) => savetheclient(e)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Client name</span>
                </label>
                <input name="ClientName"
                 
                  type="text"
                  placeholder="put a name and last name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contacts</span>
                </label>

                <input
                  
                  name="Phone_number"
                  type="text"
                  placeholder="clients phone number"
                  className="input input-bordered"
                  required
                />
                <input
                
                  name="Email"
                  type="email"
                  placeholder="clients email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div class="inline-block relative w-64">
                <select
                name="category"
                 
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Choose client category</option>
                  <option>Designer</option>
                  <option>Construction Supervisor</option>
                  <option>Construction Firm</option>
                  <option>Manufacturer</option>
                  <option>Retail</option>
                </select>
                <select name="source"
                  
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Source of Information</option>
                  <option>Company Website</option>
                  <option>Showroom Exterior</option>
                  <option>Company Google Profile</option>
                  <option>Friends</option>
                  <option>Online Digest</option>
                </select>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Basic discount, %</span>
                  </label>

                  <input
                    name="discount"
                    type="text"
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
                  Create a new client
                </button>
              </div>
            </form>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewClient;
