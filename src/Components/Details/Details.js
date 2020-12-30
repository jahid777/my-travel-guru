import React from 'react';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const {name, details, id} = props.detailsData;
    return (
        <div  style={{marginTop: '150px'}}>
            <h1>{name}</h1>
            <p>{details}</p>
            <Link to ={`/book${id}`}>
                <button style={{backgroundColor: 'orange', border: 'none', height:'40px', width:'80px', borderRadius:'5px'}}>book>></button>
            </Link>
            
        </div>
    );
};

export default Details;