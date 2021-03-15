import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CardComponent from './CardComponent';

export interface Listing {
  id: string
  company: string
  title: string
  url: string
}


const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:5000/api/listings')
      .then(res => setListings(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      Home
      {
        listings && listings.map((listing: Listing) => {
          return (
            <CardComponent listing={listing} />
          )
        }
      )
      }
    </div>
  )
}

export default Home;