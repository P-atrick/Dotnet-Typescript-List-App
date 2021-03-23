import { FunctionComponent } from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { Listing } from './Home';

type CardComponentProps = {
  listing: Listing
}

const handleDelete = (listingId: string) => {
  Axios
    .delete(`http://localhost:5000/api/listings/${listingId}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const CardComponent: FunctionComponent<CardComponentProps> = ({listing}) => {
  console.log(listing)
  return (
    <Card key={listing.id}>
      {listing.company}
      <button onClick={() => handleDelete(listing.id)}>Del</button>
    </Card>
  )
}

export default CardComponent;