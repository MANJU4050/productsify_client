import React from 'react'
import { useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useGlobal from '../hooks/useGlobal';

import './styles/css/main.css'
import './styles/css/util.css'
import './styles/fonts/font-awesome-4.7.0/css/font-awesome.css'



const UpdateProduct = () => {

  const {accessToken} = useGlobal();
  const axiosPrivate = useAxiosPrivate();
    const {productid} = useParams();
    const {productname} = useParams();
    const {productprice} = useParams();
    const {category} = useParams();
    const {quantity} = useParams();
   
    let navigate=useNavigate();
    const [productName, setProductName] = useState(productname);
    const [productPrice, setProductPrice] = useState(productprice);
    const [productQuantity, setQuantity] = useState(quantity);
    const [productCategory, setCategory] = useState(category);
  
   
  
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
        productid:productid,
        productname: productName,
        productprice: productPrice,
        quantity: productQuantity,
        category: productCategory,
      };
  
      
     const token = accessToken.token;
  
      try {
        const response = await axiosPrivate.patch("api/updateproducts",productData,{
          headers: {"Authorization" : `Bearer ${token}` }
        })
        if(response.status===200){
            alert(response.data)
            navigate(`/dashboard/viewproduct`)

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
                    Update Product
                </span>

                

                <div className="wrap-input100 validate-input" >
                    <input className="input100" value={productName} type="text" onChange={getProduct}  placeholder="Updated Name" />
                    <span className="focus-input100"></span>
                    
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" value={productPrice} type="number" onChange={getPrice}  placeholder=" Updated Price" />
                    <span className="focus-input100"></span>
                    
                </div>

                <div className="wrap-input100 validate-input" >
                    <input className="input100" value={productQuantity} type="number" onChange={getQuantity}  placeholder="Updated Quantity" />
                    <span className="focus-input100"></span>
                    
                </div>
                

                <div className="wrap-input100 validate-input">
                    <input className="input100" value={productCategory} type="text" onChange={getCategory}  placeholder="Updated Category" />
                    <span className="focus-input100"></span>
                   
                </div>
                

                
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                        Update
                    </button>
                </div>

               

                
            </form>
        </div>
    </div>
</div>

    
    );
}

export default UpdateProduct