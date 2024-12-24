


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, delProduct } from '../redux/action/action';
import {  NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Cart = () => {
  const cart = useSelector((state) => state.handleCart.cart || []);
  const dispatch = useDispatch();

  const handleInc = (product) => {
    dispatch(addProduct(product));
  };

  const handleDec = (product) => {
    dispatch(delProduct(product));
  };

  const removeProduct = (product) => {
    dispatch(delProduct(product));
  };

  if (cart.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Navbar />
        <div className="container text-center p-4 fw-bold fs-5">Cart is Empty</div>
      </div>
    );
  }

  const total = cart.reduce((acc, product) => acc + product.price * product.qty, 0);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
         
          <div className="col-lg-9 col-md-8 col-12 bg-white p-4 shadow-sm">
            <div className="d-flex justify-content-between border-bottom pb-3 mb-4">
              <h1 className="fw-5">Shopping Cart</h1>
              <h2 className="fw-5">{cart.length} Items</h2>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col-12 col-md-2">
                <h3 className="text-muted">Product Details</h3>
              </div>
            </div>

            {cart.map((product) => (
              <div key={product.id} className="d-flex align-items-center justify-content-between p-3 mb-4">
               
                <div className="d-flex w-50">
                  <div className="w-25">
                    <img className="img-fluid" src={product.image} alt={product.title} />
                  </div>
                  <div className="ml-3 flex-column flex-grow-1">
                    <span className="fw-bold text-sm">{product.title}</span>
                    <div
                      className="font-weight-bold  mt-2 text-danger"
                      onClick={() => removeProduct(product)}
                    >
                      Remove
                    </div>
                  </div>
                </div>

                
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-outline-dark"
                    style={{ fontSize: '24px', padding: '0 10px' }}
                    onClick={() => handleDec(product)}
                  >
                    -
                  </button>
                  <span className="mx-3" style={{ fontSize: '24px' }}>
                    {product?.qty}
                  </span>
                  <button
                    className="btn btn-outline-dark"
                    style={{ fontSize: '24px', padding: '0 10px' }}
                    onClick={() => handleInc(product)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-3 col-md-4 col-12 p-4">
            <h1 className="fw-5">Order Summary</h1>
       
            <div className="d-flex justify-content-between mt-4 mb-3">
              <span className="font-weight-bold text-dark">Items: {cart.length}</span>
              <span className="font-weight-bold text-dark">{total?.toFixed(2)}$</span>
            </div>

          
            <div className="d-flex justify-content-between mt-4 mb-3">
              <span className="font-weight-bold text-dark">Shipping</span>
              <span className="font-weight-bold text-dark">$10.00</span>
            </div>

         
            <div className="border-top mt-5 pt-4">
              <div className="d-flex justify-content-between font-weight-bold py-3 text-dark">
                <span>Total cost</span>
                <span>${(total + 10).toFixed(2)}</span>
              </div>
              <NavLink to="/checkout" className="btn btn-dark btn-sm w-100 font-weight-bold">
                Checkout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
