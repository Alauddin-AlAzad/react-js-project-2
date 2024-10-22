import { useEffect } from "react";
import { useState } from "react";
import Counttry from "./country/Counttry";
import './countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then (data=>setCountries(data))
    },[])
    return (
        <div>
          <h3>Countries:{countries.length}</h3>  
         <div className="country-container">
         {
            countries.map(country=><Counttry key={country.cca3} country={country}></Counttry>)
          }
         </div>
        </div>
    );
};

export default Countries;