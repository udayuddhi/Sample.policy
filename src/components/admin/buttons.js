import React from 'react';
import Card from 'react-bootstrap/Card';
import './buttons.css';


export default function buttons() {
  return (
    <div>
      <div className='row'>
      <div className='column'>
        <Card  style={{ width:'10rem', margin:'10px',marginTop:'20px'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title> helloo</Card.Title>
            <Card.Text>
            something
            </Card.Text>
            <button style={{width:'50px',backgroundColor:' rgba(39, 242, 21, 0.5)',marginRight:'6px',borderRadius:'10px'}} type='edit'> Edit </button> 
            
            <button style={{borderRadius:'10px'}} type='Delete'> Delete </button>

            
          </Card.Body>
        </Card>
      </div>  
   </div>
    </div>
  )
}

