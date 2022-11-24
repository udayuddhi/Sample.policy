import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import './policyCard.css';



const PolicyCard = ({policy}) => {





    return (
    <div className='row'>
      <div className='column'>
        <Card style={{ width:'12rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.9)'}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{policy.policyName}</Card.Title>
            <Card.Text>
            something
            </Card.Text>
            <Link to={policy.policyName} variant="primary">Buy now</Link>
          </Card.Body>
        </Card>
      </div>  
   </div>
  )
}

export default PolicyCard;