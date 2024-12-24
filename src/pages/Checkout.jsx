
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <form className="row g-3">
         
          <div className="col-lg-9 col-md-8 col-sm-12 bg-light p-4 rounded shadow-sm">
            <h1 className="fw-bold border-bottom pb-3 mb-4">Billing Address</h1>
            
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="inputFirst" className="form-label">First Name</label>
                <input type="text" className="form-control" id="inputFirst" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLast" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="inputLast" />
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="name@example.com" />
            </div>

          
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>

            <div className="row">
              <div className="col-md-4">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                  <option defaultValue>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>

            <hr />

            <h1 className="fw-bold border-bottom pb-3 mb-4">Payment</h1>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">Name on Card</label>
                <input type="text" className="form-control" id="inputName" />
                <small className="form-text text-muted">Full name as displayed on the card</small>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCredit" className="form-label">Credit Card Number</label>
                <input type="text" className="form-control" id="inputCredit" />
              </div>
            </div>

            <hr />

           
            <div className="col-12">
              <button type="submit" className="btn btn-dark w-100 mb-2">Continue to Checkout</button>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12 p-4">
           
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
