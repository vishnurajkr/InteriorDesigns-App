import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import Footer from './footer'
import AXIOS from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const navigate=useNavigate("");

    function admin(){
        AXIOS.post("http://localhost:9001/admin",{username:username,password:password}).then((response)=>{
            setUsername("");
            setPassword("");
            if(response.data.msg){
            navigate('/adminpage')
            }else{
              setMsg('Wrong credentials')
            }
    })
  }
  return (
    <>
    <div className="mx-auto border border-primary rounded bg-light w-50" >
    
    <Container>
        <br />
      <h1 className='text-center'>Admin Login</h1>
      <br />
     
        <Row>
        <Col lg={6}>
          <img src='https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?size=338&ext=jpg&ga=GA1.2.2066267140.1679901691&semt=ais' className='img-fluid shadow-4' alt='...' />
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
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <br />
      
      <Button variant="primary" type="button" onClick={admin}>
        Submit
      </Button>
    </Form>
    <br />
            </Col>
        </Row>
        
        <br></br>
<h2>{msg}</h2>
        
    </Container>
    
    </div>
    <br /><br />
    <Footer />
    </>
  )
}
    
    

export default AdminLogin