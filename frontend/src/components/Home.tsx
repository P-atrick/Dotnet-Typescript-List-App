import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:5000/api/listings')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home;