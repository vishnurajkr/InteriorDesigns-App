import React from 'react'
import Footer from './footer'
import { Container,Row,Col,Form,Button,} from 'react-bootstrap'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AXIOS from 'axios';

function Login() {
  const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const navigate=useNavigate("");
    
  
    function log(){
        AXIOS.post("http://localhost:9001/log",{username:username,password:password}).then((response)=>{
            setUsername("");
            setPassword("");
            if(response.data.msg){
            navigate('/profile')
            }else{
              setMsg('Wrong credentials')
            }
    })
  }
            
  return (
    <>
    <div className="mx-auto border border-primary rounded bg-light w-50" >
    
    <Container>
      <h1 className='text-center'>Login Here</h1>
     
        <Row>
          <Col lg={6}>
          <img src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1679901704~exp=1679902304~hmac=ca030f567f09e637f4423907f5210269a735e5855859fa113b43e528d7b9de28' className='img-fluid shadow-4' alt='...' />
          </Col>
            <Col lg={6}>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
       
      </Form.Group>
      <br />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      
      <Button variant="primary" type="button"  onClick={log}>
        Submit
      </Button>
    </Form>
            </Col>
        </Row>
        <h3 className='text-center'>{msg}</h3>
        <br></br>

        <p className='text-center'>New User?<Link to='/register'className='link-primary'>Register Now</Link></p>
    </Container>
    
    </div>
    <br /><br />
    <Footer />
    </>
  )
}

export default Login