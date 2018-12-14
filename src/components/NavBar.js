import React from 'react';
import { Navbar, NavbarBrand, ButtonGroup,Button, InputGroup,InputGroupAddon,Input,} from 'reactstrap';

class NavBar extends React.Component {

  _onRadioBtnClick = (target) => {
    this.props._category(target)
  }

  _onChange= ({target}) => {
    this.props._filterName(target.value)
  }
  
  render() {
      return (
      <Navbar color="dark" light expand="md">
        <NavbarBrand className="text-white">Book Store</NavbarBrand>
        <ButtonGroup>
          <Button color="primary" name="category" onClick={() => this._onRadioBtnClick(1)}>Title</Button>
          <Button color="primary" name="category" onClick={() => this._onRadioBtnClick(2)}>Author</Button>
          <Button color="primary" name="category" onClick={() => this._onRadioBtnClick(0)}>All</Button>
        </ButtonGroup>
        <InputGroup>
          <Input type="text" className="form-control" onChange={this._onChange} name="name" placeholder="Search by Title" />
          <InputGroupAddon addonType="append"><Button color="secondary">Search</Button></InputGroupAddon>
        </InputGroup>
      </Navbar>
    )
  }
}
export default NavBar