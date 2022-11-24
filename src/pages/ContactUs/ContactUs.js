import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./contact-img.svg";
import './ContactUs.css'


export default function ContactUs() {
    
  return (
    
    <div className="container" >
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            
             
            
                <h2>Get In Touch</h2>
              <form>
                  <Row >
                    <Col  size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Full Name"  required />
                    </Col>
                    
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address"  required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="btn">
                      <button type="submit" placeholder="submit" > submit</button>
                    </Col>
                    
                  </Row>
                </form>  
          </Col>
        </Row>
      </Container>
    </section>
       
    </div>
 
  )
};