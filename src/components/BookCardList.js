import React from 'react';
import {Container,Row} from 'reactstrap';
import BookCard from './BookCard'

const BookCardList = ({newList, _toTrue}) => {

  const Card = newList.map(listItem => <BookCard key={listItem.id} book={listItem} _toTrue={_toTrue}/>)
  
  
  return (
    <Container className="mw-100">
      <Row>
        {Card}
      </Row>
    </Container>
    )
  }
  
  export default BookCardList
  