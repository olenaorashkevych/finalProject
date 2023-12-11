import React from 'react'
import { Route, Routes } from 'react-router-dom';

function NewClient(logedin) {

  return (
    <div><div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Create a new client now!</h1>
        <p className="py-6">Please fill all the data</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Client name</span>
            </label>
            <input type="text" placeholder="put a name and last name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contacts</span>
            </label>
            
            <input type="text" placeholder="clients phone number" className="input input-bordered" required />
            <input type="text" placeholder="clients phone number" className="input input-bordered" required />
          </div>
          <div class="inline-block relative w-64">
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Choose client category</option>
    <option>Designer</option>
    <option>Construction Supervisor</option>
    <option>Construction Rirm</option>
    <option>Manufacturer</option>
    <option>Retail</option>

  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create a new client</button>
          </div>
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default NewClient