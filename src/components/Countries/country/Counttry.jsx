import './country.css'

const Counttry = ({country}) => {
    console.log(country)
    const {name,flags,population,area,cca3}=country;
    return (
        <div className='country'>
           <h3>name:{name?.common}</h3> 
           <img src={flags?.png} alt="" />
           <p>Population:{population}</p>
           <p>Area:{area}</p>
           <p><small>code:{cca3}</small></p>
        </div>
    );
};

export default Counttry;