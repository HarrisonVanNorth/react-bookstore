import React from 'react';
import {Container,Col,Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';

const BookCard = ({book,_toTrue}) => {

  const _handleClick = () => {
    _toTrue(book.id)
  }
  
  

  return (
    <Col className="col-3 mb-2">
      <Card className="h-100 w-10">
        <CardBody className="h-50">
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle className="mb-1">By: {book.author}</CardSubtitle>
          <CardText>Pages: {book.pages}</CardText>
        </CardBody>
        <Container>
          <Button onClick={_handleClick} className="btn btn-primary">Add to Cart</Button>
          <CardText className="float-right p-2 text-right">${book.price}</CardText>
        </Container>
      </Card>
    </Col>
  )
}
export default BookCard