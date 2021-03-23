import { FunctionComponent } from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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

const handleEdit = (listingId: string) => {}

const CardComponent: FunctionComponent<CardComponentProps> = ({listing}) => {
  console.log(listing)
  return (
    <Card key={listing.id} className="card">
      <CardContent>
        <span>{listing.company}</span>
        <span><a href={listing.url}>{listing.title}</a></span>
      </CardContent>
      <CardActions>
        <button onClick={() => handleDelete(listing.id)}><DeleteIcon /></button>
        <button onClick={() => handleEdit(listing.id)}><EditIcon /></button>
      </CardActions>
    </Card>
  )
}

export default CardComponent;