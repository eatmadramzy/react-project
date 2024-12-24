
import React from "react";

const Home = () => {
    return (
        <div className="hero m-3">
            <div className="card bg-dark text-white border-0">
                <img
                    src="/assets/6186390f0dd40285e85933c0148015a1.jpg"
                    className="card-img"
                    alt="card"
                    style={{ objectFit: 'cover', width: '100%', height: '550px' }}
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <div className="container text-center">
                        <h5 className="card-title fs-1 fw-bolder mb-4">Welcome to our store</h5>
                        <p className="card-text fs-4 mb-4">
                            Welcome to our store! Discover a wide range of high-quality products at competitive prices,
                            all in one place. Enjoy a seamless shopping experience with fast delivery and exclusive deals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;