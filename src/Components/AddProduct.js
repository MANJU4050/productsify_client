import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useGlobal from "../hooks/useGlobal";

import './styles/css/main.css'
import './styles/css/util.css'
import './styles/fonts/font-awesome-4.7.0/css/font-awesome.css'

const AddProduct = () => {

  
 const axiosPrivate = useAxiosPrivate();
 const {accessToken} = useGlobal();
 const navigate=useNavigate();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
 

  const getProduct = (event) => {
    setProductName(event.target.value);
  };

  const getPrice = (event) => {
    setProductPrice(event.target.value);
  };

  const getQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const getCategory = (event) => {
    setCategory(event.target.value);
  };

  const addHandler = async (event) => {
    event.preventDefault();

  

    const productData = {
      productname: productName,
      productprice: productPrice,
      quantity: quantity,
      category: category,
    };

    const token = accessToken.token;

    try {
      const response = await axiosPrivate.post(
        "api/products",productData,{
          headers: {"Authorization" : `Bearer ${token}` },
          withCredentials: true 
       } );
     
      if (response.status === 201) {
        alert(response.data);
        navigate(`/dashboard/viewproduct`)
        
      } else if (response.status === 200) {
        alert(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
           

            <form onSubmit={addHandler} className="login100-form validate-form">
                <span className="login100-form-title">
                    Add Product
                </span>

                

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="text" onChange={getProduct}  placeholder="Product Name" />
                    <span className="focus-input100"></span>
                    
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="number" onChange={getPrice}  placeholder="Price" />
                    <span className="focus-input100"></span>
                    
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" type="number" onChange={getQuantity}  placeholder="Quantity" />
                    <span className="focus-input100"></span>
                    
                </div>
                

                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" onChange={getCategory}  placeholder="Category" />
                    <span className="focus-input100"></span>
                   
                </div>
                

                
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                        Add
                    </button>
                </div>

               

                
            </form>
        </div>
    </div>
</div>


  
  );
};

export default AddProduct;

