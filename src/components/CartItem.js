import React from 'react';
import {ListGroupItem, ListGroupItemHeading, Badge, ListGroupItemText } from 'reactstrap';

const CartItem = ({book}) => {

  return (
        < ListGroupItem className = "" >
        <ListGroupItemHeading>{book.title}</ListGroupItemHeading>
          <ListGroupItemText className="">
          <Badge pill>${book.price}</Badge>
          </ListGroupItemText>
        </ListGroupItem>
  )
}

export default CartItem