import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {name, capital, flag, alpha2Code} = props.country
    return (
        <div className="countryInfo">
            <h1>{name}</h1>
            <p>{capital}</p>
            
            <img src={flag} alt="" width="70%" />
            <br/>
            <button><Link to={`/about/${alpha2Code}`}>Add Country</Link></button>
        </div>
    );
};

export default Country;