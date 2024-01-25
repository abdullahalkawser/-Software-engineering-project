import { useState } from "react";

const Newdata = ({ data,visitcountryhandle,visitcountryflaghandle }) => {
  console.log(data.flags);

  // console.log(visitcountryhandle)

  const [visit, setVisit] = useState(false);

  const onHandle = () => {
    setVisit(!visit);
  };

  return (
    <div className={`countery ${ visit && 'visits'}`}>
         <h2 style={{color: visit ? 'purple' : 'white'}}>Name: {data.name.common}</h2>
      <img src={data.flags.png} alt="Country Flag" />
   
      <h3 >Capital: {data.capital}</h3>
      <p>Population: {data.population}</p>
      <p>Region: {data.region}</p>
      <button onClick={()=> visitcountryflaghandle(data)}>Add Flag</button>

      <button onClick={() => visitcountryhandle(data)}>Mark As</button>      <br />
      <br />
      <button onClick={onHandle}>{visit ? 'Visited' : 'going'}</button>

      {visit ? 'I have visited this country' : 'I want to visit this country'}
    </div>
  );
};

export default Newdata;
