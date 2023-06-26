import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbars.css";
import { Route, Routes, Link} from "react-router-dom";
import Contact from "./contact";
import Home from './home'
import Login from "./login";
import pic from './images/abhees.jpg'
import Register from "./register";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import AdminGallery from './AdminGallery';
import Payment from "./Payment";

function Navbars() {
  return (
    <>
      <div className="topbar"></div>

      <div>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand as={Link} to="/">
             <img src={pic} alt='logo' height="90px" width="90px"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav >
                <Nav.Link as= {Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as= {Link} to="/register">Register</Nav.Link>
                <Nav.Link as= {Link} to="/login">Login</Nav.Link>
                <Nav.Link as= {Link} to="/contact">
                  Contact Us
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/alogin" element={<AdminLogin />} />
        <Route path="/agallery" element={<AdminGallery />} />
        <Route path="/checkout" element={<Payment />} />

      </Routes>
        
        
      </div>
      </>
  )
  }
      

export default Navbars;
