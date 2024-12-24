
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action/action";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products/");
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
        };

        getProducts();
    }, []);

    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addProduct(product));
    };

    const Loading = () => {
        return (
            <>
                <div className="col-12 col-sm-6 col-md-3 mb-5">
                    <Skeleton height={350} />
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-5">
                    <Skeleton height={350} />
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-5">
                    <Skeleton height={350} />
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-5">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center m-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>

                {filter.map((product) => {
                    return (
                        <div className="col-12 col-sm-6 col-md-3 mb-5" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt="" height="200px" />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title.substring(0, 12)}...
                                    </h5>
                                    <p className="card-text fw-bold">${product.price}</p>
                                    <div className="d-flex gap-2">
                                        <Link to={`/products/${product.id}`} className="btn btn-dark ">Buy Now</Link>
                                        <button className="btn btn-dark" onClick={() => addCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <>
           
            {location.pathname !== "/" && <Navbar />}

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-5 text-center fw-5">Latest Products</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};

export default Products;

