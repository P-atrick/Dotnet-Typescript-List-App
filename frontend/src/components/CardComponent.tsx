import { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import { Listing } from './Home';

type CardComponentProps = {
  listing: Listing
}

const CardComponent: FunctionComponent<CardComponentProps> = ({listing}) => {
  console.log(listing)
  return (
    <Card key={listing.id}>
      {listing.company}
    </Card>
  )
}

export default CardComponent;