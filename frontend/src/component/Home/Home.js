import React, { Fragment, useEffect, useState } from "react";
import { RiMouseFill } from "react-icons/ri";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import Load from "../Load/Load";
import Slider from "../Slider/slider"
import { getProduct, clearErrors } from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import ProductCard from "./ProductCard.js"

const Home = () => {
 const alert = useAlert();
 const dispatch = useDispatch(); 
 const {loading, error, products} = useSelector(
  (state) => state.products
 )
 useEffect(() => {
  if(error) {
    alert.error(error);
    dispatch(clearErrors()); 
}
     dispatch(getProduct());
 }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
       <Load/>
      ) : (
        <Fragment>
        <MetaData title="ECOMMERCE" />
         
        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>
          <Slider />
          <a href="#container">
            <button>
              Scroll <RiMouseFill />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
           {products && products.map(product => (
            <ProductCard key={product._id} product={product} />
           ))}
            
         </div>
      </Fragment>
 
      )}
    </Fragment>
  );
};

export default Home;