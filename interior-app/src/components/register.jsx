import React from 'react'
import Footer from './footer'
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import { useState} from 'react';
import AXIOS from 'axios'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Register() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const navigate=useNavigate("");
  
    function reg(){
        AXIOS.post("http://localhost:9001/create",{username:username,email:email,password:password}).then((response)=>{
            console.log(response.data.msg)
            setUsername("");
            setEmail("");
            setPassword("");
            setMsg(response.data.msg)
            navigate("/login");
            
           
        })                                                                                                                                                                      
    }
  return (
       

    <>
    <div  className="mx-auto border border-danger rounded bg-light w-50" >
    <Container>
      <h1 className='text-center'>Register Here</h1>
      <h3>{msg}</h3>
        <Row>
        <Col lg={6}>
          <img src='https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1679901964~exp=1679902564~hmac=6f81b0ce9f686d668a37b576472181ef867a324d2f2d9f46fda4b8308c609701' className='img-fluid shadow-5' alt='...' />
          </Col>
            <Col lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
       <Form.Control type="text" placeholder="Username"  value={username}  onChange={(e)=>{setUsername(e.target.value)}} /> 
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}} /> 
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} /> 
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={reg} >
        Submit
      </Button>
    </Form>
            </Col>
        </Row>
        <br />
        <p className='text-center'>Already have an Account?<Link to='/login'className='link-danger'>Login</Link></p>
    </Container>
    </div>
    <br></br><br /> 

    
    <Footer />
    </>
  )
}

export default Register