import React from "react";
import { useState,useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Navbar from "../components/Navbar";
import handleCart from "../redux/action/reducer/handleCart";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action/action";
import Products from "../components/Products";



const Product=()=>{
    const{id}=useParams()
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch();
    const addCart=(product)=>{
        dispatch(addProduct(product))
    }

    
    
    useEffect(()=>{
        const getProduct=async()=>{
            setLoading(true)
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }

      getProduct();
    },[])
    const Loading =()=>{
        return(
            <>
          <div className="col-md-6 " style={{lineHeight:2}}>
            <Skeleton height={400}/>
          </div>
          <div className="col-md-6">
            <Skeleton height={50} width={300}/>
            <Skeleton height={75}/>
            <Skeleton height={25} width={50}/>
            <Skeleton height={50}/>
            <Skeleton  height={50}width={100}/>
            <Skeleton  height={50}width={100} style={{marginLeft:6}}/>

          </div>
            </>
        )
    };
    const ShowProduct =()=>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt="" height={400} width={400}/>
            </div>
            <div className="col-md-6">
               <h4 className="text-uppercase">
                    {product.category}
               </h4>
               <h1 className="display-5">
                      {product.title}
               </h1>       
               <p className="load fw-bolder">
                 Rating {product.rating&&product.rating.rate}
                 <i className="fa fa-star"></i>
               </p>
                <h3 className="display-6 fw-bold">
                    ${product.price}
                </h3>
                <p className="load">{product.description}</p>
                <button className="btn btn-outline-dark"onClick={()=>addCart(product)}
                >Add to Cart</button>
                <NavLink to="/cart" className="btn btn-dark m-2">Go to Cart</NavLink>
                


            </div>
            </>
        )

    }
    return(
        <>
       <Navbar/>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> :<ShowProduct/>}
            </div>
        </div>
        
        </>
    )
}
export default Product