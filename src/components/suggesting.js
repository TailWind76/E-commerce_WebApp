import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Suggesting() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const jsonURL = '/eComerceData.json';

      try {
        const response = await axios.get(jsonURL);
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='homepage_collection'>
      <div className='homepage_collection__items'>
        {data.slice(0, 4).map((item, index) => (
       <Link className='homepage_collection__item' to={`/Product/${item.id}`} > 
            <img src={item.image} alt='Dandy Chair' />
            <h3>{item.name}</h3> 
            <p>{item.price}</p> 
        </Link> 
        ))}
      </div>
      <Link to='/Products'>
        <button>View collection</button>
      </Link>
    </div>
  );
}

export default Suggesting;
