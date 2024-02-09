import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {area, region, name} = props.country;
   
    return (
        
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <p>Area: {area}</p>
            <h4><small>Region: {region}</small></h4>
        </div>
    );
};

export default Country;