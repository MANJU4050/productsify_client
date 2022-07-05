import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'
import axios from '../api/axios'

const Dashboardnav = ({id}) => {

  const navigate=useNavigate();

  const logout =() =>{

axios.get(`logout`)
    navigate("/")
  }
 

  return (
    <Navbar bg="primary" variant="dark">
        <Container>
       
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/dashboard")}} >Dashboard</Nav.Link>
            <Nav.Link onClick={()=>{navigate(`/dashboard/addproduct`)}} >Addproduct</Nav.Link>
            <Nav.Link onClick={()=>{navigate(`/dashboard/viewproduct`)}} >ViewProduct</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Dashboardnav