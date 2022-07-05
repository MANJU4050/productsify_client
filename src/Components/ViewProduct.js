import React from 'react'
import { useState,useEffect } from 'react'
import Productlist from './Productlist'
import { Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useGlobal from '../hooks/useGlobal'
import BarLoader from "react-spinners/BarLoader";



const ViewProduct = (props) => {
const {accessToken} = useGlobal();
  const axiosPrivate = useAxiosPrivate()  
const {id}=useParams()   
const navigate = useNavigate()

const [state,setState]=useState(true);
const alter=()=>{
setState(!state)
}
const [array,setArray]=useState([])

useEffect(() => {
  
    function getd() {
    
      const token = accessToken.token;
      
      
      axiosPrivate.get(`api/viewproducts`,{
          headers: {"Authorization" : `Bearer ${token}` },
          withCredentials: true
        })
        .then((res) => {
          
            setArray(res.data);})
            .catch((err) => {
           
              if(err.response.status===400){
                alert("session expired please login again")
            
                navigate('/')
              }
            })
    
        .finally();

    }

     getd();}
  

, [state]);

  


  return (<div>
     <Table responsive striped bordered hover variant="dark" >
    <thead>
        <tr>
            <th style={{textAlign: 'center'}}>SL NO</th>
            <th style={{textAlign: 'center'}}>Product</th>
            <th style={{textAlign: 'center'}}>Price</th>
            <th style={{textAlign: 'center'}}>Quantity</th>
            <th style={{textAlign: 'center'}}>Category</th>
            <th style={{textAlign: 'center'}}>Update</th>
            <th style={{textAlign: 'center'}}>Delete</th>
        </tr>
    </thead>
    <tbody>
     {array.map((product,index)=>{
        return(<Productlist slno={index} data={alter} key={product.productid} id={id} productid={product.productid} productname={product.productname} productprice={product.productprice}
        quantity={product.quantity} category={product.category}   />)
     })}
    </tbody>
</Table>


  </div>
    
    
  )
}

export default ViewProduct