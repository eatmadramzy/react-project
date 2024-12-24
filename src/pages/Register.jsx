
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row justify-content-center my-4 h-100">
                    <div className="col-sm-8 col-md-4 col-lg-4 mx-auto">
                        <form>
                            <div className="my-3">
                                <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleInputName" 
                                    aria-describedby="nameHelp" 
                                    placeholder="Enter Your Name" 
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="name@example.com" 
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder="password" 
                                />
                            </div>
                            <div className="my-3">
                                <p>Already have an account? 
                                    <Link to="/login" className="text-decoration-underline text-info">Login</Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-dark mx-auto my-2">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;