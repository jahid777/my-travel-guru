import { Card } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import { TravelContext } from '../../App';
import hotel from '../fakeData/hotel'
import HotelDetails from '../HotelDetails/HotelDetails';
import maps from '../images/Image/map.PNG';

const Hotel = () => {
    const [travelDataContext, setTravelDataContext] = useContext(TravelContext);

    const [hotelData, setHotelData] = useState([])
    useEffect(()=>{
        setHotelData(hotel);
    },[])
    // console.log(travelDataContext); //aytar modde select kora card ar data ase
     
    
    const [matchData, setMatchData] = useState([]);
    console.log(matchData);
    
    useEffect(()=>{
        const info = hotel.filter(hd => hd.placeId == travelDataContext.id);
        // console.log(info);
        setMatchData(info)
    },[])
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>{travelDataContext.name}</h1>
                        <div className="hotel-main-section">
                            {
                                matchData.map(dt => (
                                     <div style={{display:'flex'}}>
                                          <img style={{width:'300px',margin:'20px'}} src={dt.img} alt=""/>
                                          
                                          <div style={{marginTop:'30px'}}>
                                            {dt.name}
                                          </div>
                                     </div>
                                    ))
                            }
                          
                        </div>
                    </Col>
                
                    <Col md={6}>
                        <img style={{width:'650px'}} src={maps} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hotel;