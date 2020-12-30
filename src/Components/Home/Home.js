import React from 'react';
import { useState } from 'react';
import {  CardDeck, Col, Container, Row } from 'react-bootstrap';
import fakeData from '../fakeData/travel';
import TravelData from '../TravelData/TravelData';
import './Home.css';
import '../TravelData/TravelData.css';
import Details from '../Details/Details';

const Home = () => {
    const [travelPlace, setTravelPlace] = useState(fakeData);
    


 
    const [showData, setShowData] = useState([])
   
       
        const handleShowData = (data) => {
        // setBookDetails([data]) //ata korsi karon deafualt korer jonno
        setShowData([data]); //ata korsi jate description ghula sore new description hoy aki jaygay
    }
    //   useEffect(()=>{
    //     setBookDetails(fakeData[0]) //default value set korte
    //   },[])
    return (
        <div>
            <Container>
            <Row>

           
            <Col xs={6} md={4}>

                
            {
                showData.map(td => <Details detailsData={td}></Details> )
            }
               
             </Col>
            
             
             <Col xs={12} md={8}>
             <CardDeck className="main-card-container">
             {
                 travelPlace.map(tp => <TravelData singleTravelPlace = {tp}
                 handleShowData={handleShowData}
                 ></TravelData>)
             }
             </CardDeck>
             </Col> 
             

            </Row>
            </Container>
            
        </div>
    );
};

export default Home;