import Backendless from "backendless";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function NewClient({ logedin, setloged }) {
  // const [Discount, setDiscount] = useState(0);
  // const [ClientName, setClientName] = useState(" ");
  // const [Email, setEmail] = useState(" ");
  // const [Category, setCategory] = useState(" ");
  // const [Phone_number, setPhone_number] = useState(" ");
  // const [Source, setsource] = useState(" ");

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
      // Discount: parseInt(Discount),
      // Category: Category,
      ClientName: name,
      Email: email,
      Phone_number: phone,
      Source: source,
      Category: category,
      Discount: parseInt(discount)
    };
    // console.log(Discount);
    // console.log(typeof Discount);
    Backendless.Data.of("Allclients")
      .save(savedClient)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  }

  // function exampoleSubmit (e) {
  //   e.preventDefault()
    
  //   console.log("for Olena:", name, amount);

  // }

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
                  // onChange={(e) => setClientName(e.target.value)}
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
                  // onChange={(e) => setPhone_number(e.target.value)}
                  name="Phone_number"
                  type="text"
                  placeholder="clients phone number"
                  className="input input-bordered"
                  required
                />
                <input
                  // onChange={(e) => setEmail(e.target.value)}
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
                  // onChange={(e) => setCategory(e.target.value)}
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
                  // onChange={(e) => setsource(e.target.value)}
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
                    // onChange={(e) => setDiscount(e.target.value)}
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
            
            {/* <form onSubmit={exampoleSubmit}>
              <input type="text" name="name" id="" />
              <input type="text" name="amount" id="" />
              <button type="submit">Add</button> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewClient;
