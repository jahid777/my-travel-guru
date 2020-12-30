import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import {Link}  from 'react-router-dom';
import './TravelData.css';

const TravelData = (props) => {
    const {img,name,id} = props.singleTravelPlace ;
    return (
        
           
  
   <Card onClick={()=>props.handleShowData(props.singleTravelPlace)} className="card-container">
   <Card.Img variant="top" style={{height: '250px'}} src={img}/>
    <Card.Body>
      <Card.Title style={{color: 'black'}}>{name}</Card.Title>
    </Card.Body>
  </Card>
  
            

             
        
    );
};

export default TravelData;