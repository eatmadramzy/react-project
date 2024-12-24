
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5 py-5">
                <h2 className="text-center">Contact Us</h2>
                <hr />
                <div className="row my-4">
                    {/* Form container with responsive grid */}
                    <div className="col-sm-8 col-md-4 col-lg-4 mx-auto">
                        <form>
                            {/* Full Name Field */}
                            <div className="my-3">
                                <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName"
                                    aria-describedby="namelHelp"
                                    placeholder="Enter Your Name"
                                />
                            </div>

                            {/* Email Field */}
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

                            {/* Message Field */}
                            <div className="my-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Enter Your Message"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-dark w-100 mx-auto my-2">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;
