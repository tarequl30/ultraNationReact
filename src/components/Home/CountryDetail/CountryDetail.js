import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {alpha2Code} = useParams()
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
        .then(res => res.json())
        .then(data =>  setDetail(data))
        console.log(detail);
    },[])
    return (
        <div>
            <h1>Details of {alpha2Code}</h1>
            <p>{detail.name}</p>
            <p>{detail.capital}</p>
        </div>
    );
};

export default CountryDetail;