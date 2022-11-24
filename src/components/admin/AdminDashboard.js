import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './admin.css';
import axios from 'axios';
import Buttons from './buttons';

const AdminDashboard = () => {
  const[policy , setPolicy] = useState({
    policyName:'',
    ageLimit:0,
    insuredTotalAmount:0,
    minAmount:0,
    installmentAmount:0,
    tenureYear:0
  });
   const create= ()=>{
    console.log(policy);
     axios.post('http://localhost:5000/policies',policy)
     
   
   }
  return (
    
      <Row className='row'>
        <Col className='box' xs={12} md={8} >
          <div className='innerbox'>
         <Buttons />

        </div>
          

          
        </Col>
        <Col  xs={6} md={4} >
        
    <Form className=' form'>
    <h1>Create a new <br></br> Policy :) </h1>
      <Form.Group className=" textField mb-3">
        <Form.Control type="text" placeholder="Enter Policy name" value={policy.policyName} onChange={(event)=>{
          setPolicy({...policy,  policyName:event.target.value})}} />
      </Form.Group>

      <Form.Group className=" textField mb-3"> 
        <Form.Control  type="number" placeholder="Enter Age Limit" value={policy.ageLimit} onChange={(event)=>{
          setPolicy({...policy,  ageLimit:event.target.value})}} />
      </Form.Group>
      <Form.Group className=" textField mb-3">
        <Form.Control  type="text" placeholder="Enter insuredTotalAmount" value={policy.insuredTotalAmount}  onChange={(event)=>{
          setPolicy({...policy, insuredTotalAmount:event.target.value})}}/>
      </Form.Group>

      <Form.Group className=" textField mb-3">
        <Form.Control type="text" placeholder="Enter minAmount" value={policy.minAmount}  onChange={(event)=>{
          setPolicy({...policy,  minAmount:event.target.value})}}/>
      </Form.Group>

      <Form.Group className=" textField mb-3">
        <Form.Control type="text" placeholder="Enter installmentAmount" value={policy.installmentAmount}  onChange={(event)=>{
          setPolicy({...policy,  installmentAmount:event.target.value})}}/>
      </Form.Group>

      {/* <Form.Group className=" textField mb-3">
        <Form.Control  type="text" placeholder="Enter coverageLimit" />
      </Form.Group> */}

      <Form.Group  className=" textField mb-3">
        <Form.Control  type="number" placeholder="Tenure year" value={policy.tenureYear}  onChange={(event)=>{
          setPolicy({...policy,  tenureYear:event.target.value})}}/>
      </Form.Group>


      <Button className='btn' variant="primary" onClick={create} >
        create
      </Button>
    </Form>
        </Col>
      </Row>
        

  )
}

export default AdminDashboard;