
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Login</h1>
                <hr />
                <div className="row justify-content-center my-4">
                    <div className="col-md-6 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="my-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" />
                            </div>
                            <div className="my-3">
                                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-dark mx-auto my-2">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
