import React from 'react';
import { ListGroup,ListGroupItem, ListGroupItemHeading} from 'reactstrap';
import CartItem from './CartItem'
const ShoppingCart =({newCartList}) => {

  const Item = newCartList.map(listItem => <CartItem key={listItem.id} book={listItem}/>)
  const Total = newCartList.reduce((acc,item)=> {return acc + item.price},0)


    return (
      <ListGroup className="">
        < ListGroupItem active className = "" >
          <ListGroupItemHeading className="">Shopping Cart</ListGroupItemHeading>
        </ListGroupItem>
        <ListGroupItemHeading>
        Total Price ${Total}
        </ListGroupItemHeading>
          {Item}
      </ListGroup>

    )
  }

export default ShoppingCart