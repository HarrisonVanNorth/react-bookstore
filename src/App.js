import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col } from 'reactstrap';
import BookCardList from './components/BookCardList'
import ShoppingCart from './components/ShoppingCart'
import NavBar from './components/NavBar'
class App extends React.Component {

  state = {
    books: [],
    filter : {
      category: 0,
      name: ""
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8082/api/books')
    const json = await res.json()
    this.setState({books: json})
  }

  
  _category = (num) => {
    console.log(num)
    this.setState((currentState)=> {
    let newFilter = currentState.filter 
    newFilter.category = num
      return {filter : newFilter} 
    })
  }

  _filterName = (name) => {
    console.log(name)
    this.setState((currentState) => {
    let newFilter = currentState.filter
    newFilter.name = name
      return {filter : newFilter}
    })
  }

  _toTrue = (bookId) => {
    console.log(bookId)
    this.setState((currentState)=> {
      let cartList = currentState.books
      let newCartList = cartList.map((item) => {
        if(item.id === bookId){ 
          return {...item, inCart : true}
        }
        return item
      })
      return {books : newCartList}
    })
  }
  
  render() {
    const {books,filter} = this.state
    let newList = books
    if (filter.category === 1) {
      newList = books.filter(book => book.title.toLowerCase().startsWith(filter.name.toLowerCase()))
    } else if (filter.category === 2) {
      newList = books.filter(book => book.author.toLowerCase().startsWith(filter.name.toLowerCase()))
    }
    let newCartList = books.filter(book => book.inCart)
    console.log(newCartList)




    return  (     
      <Container className=" mw-100 p-0 mx-0 my-0 flex">
        <NavBar _category={this._category} _filterName={this._filterName}/>
        <Row className="mt-3">
          <Col xl="9" className="p-0">
            <BookCardList newList={newList} _toTrue={this._toTrue}/>
          </Col>
          <Col className="p-0" sm="3">
            <ShoppingCart newCartList={newCartList}/>
          </Col>
        </Row>
      </Container>
    ) 
  }
  
}

export default App 