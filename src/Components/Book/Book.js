import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { TravelContext } from '../../App';
import fakeData from '../fakeData/travel';
import './Book.css';


const Book = () => {
   
  const {bookId} = useParams(); //book button a click korle oi card ar data ta jabe
  const history = useHistory();
 
  const handleBooking = () => {
      history.push("/login");
      };
     const [travelDataContext, setTravelDataContext] = useContext(TravelContext);; 

      // const [data, setData] = useState(fakeData);
     
      const [bookDetails, setBookDetails] = useState([]);
      useEffect(()=>{
          const info = fakeData.find(td => td.id ===  parseInt(bookId))
          setBookDetails(info)
          setTravelDataContext(info) // aytay find kora matchg data dhukaia disi
      },[])
      console.log(bookDetails);
      console.log(fakeData);
    return (
   <div>
      <Container>
           <Row>
            <Col xs={6} md={6}>
                <h1>{bookId}</h1>
                <h1>{bookDetails.name}</h1>
                <p>{bookDetails.details}</p>
            </Col>



            <Col xs={6} md={6}>
                <div className="form-container">
                <Form className="ship-form">
                  <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{color: 'black'}}>origin</Form.Label>
                  <Form.Control type="text" value="Dhaka" placeholder="origin" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{color: 'black'}}>destination</Form.Label>
                  <Form.Control type="text" value={bookDetails.name} placeholder="destination" />
                </Form.Group>

                <Form.Label style={{color: 'black'}}>From</Form.Label>
                  <Form.Control type="date"/>

                  <Form.Label style={{color: 'black'}}>To</Form.Label>
                  <Form.Control type="date"/>
              </Form>
              <button variant="primary"    className="submit-btn"  onClick={handleBooking}>
               Booking start
                </button>
                </div>
            </Col>
           </Row>
      </Container>
    </div>
    );
};

export default Book;