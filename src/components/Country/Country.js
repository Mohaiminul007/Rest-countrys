import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {area, region, name, flags, population} = props.country;
   
    return (
        
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <h4><small>Region: {region}</small></h4>
            <h4>Population:{population}</h4>
        </div>
    );
};

export default Country;