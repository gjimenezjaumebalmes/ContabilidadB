import React from 'react'
import Axios from 'axios'
import {APP_URL} from '../resources/config'

import {
  Button,
  Collapse,
  Navbar as NB,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import Jwt from 'jwt-decode'
import Cookie from 'js-cookie'
import {Link} from 'react-router-dom'

const token = Cookie.get('token')
let decode =''
if (token) {
  decode = Jwt(token)
}


class Navbar extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            logout : '',
            id : decode.id_user,
            navCollapsible: false
        }
    }
    
    
    async logout(event){
      event.preventDefault();
      await Axios.get( APP_URL.concat('user/logout'), {
        headers: {
           Authorization: 'Bearer ' + token
        }
      })
        .then((res) =>{
          console.log(res)
          if (res.data.success === true) {
            Cookie.remove('token')
            window.location.reload()            
          }
        })
    }




    toggler = ()=>{
        this.setState({navCollapsible:!this.state.navCollapsible})
    }

    
    render(){
        const {navCollapsible} = this.state
        return(
          <div>
          <NB color="light" light expand="md" className="shadow fixed-top">
            <NavbarBrand href="/" className="text-success"><strong><i>DurumEats</i></strong></NavbarBrand>
            <NavbarToggler onClick={this.toggler} />
            <Collapse isOpen={navCollapsible} navbar>
              <Nav className="mr-auto" navbar>
              </Nav>
                <Nav color='#28A745' > 
                  <Link style = {{fontSize:'20px'}} className="nav-link fas fa-cart-arrow-down text-success" to={`/store/${this.state.id}`}></Link>
                </Nav>
              &nbsp; &nbsp;

                {!token?
                <Nav Navbar>
                  <NavItem>
                    <Link to="/login" className="text-white">
                  <Button color="success">
                      Log In 
                    </Button>
                      </Link>  &nbsp;
                      <Link to="/register" className="text-success">
                    <Button outline color="success">
                        Register
                    </Button>
                        </Link>
                  </NavItem>
                </Nav>
                :
                <Nav Navbar>
                  <NavItem>
                  <Button color="success">
                    <Link to="/" className="text-white">Profile</Link>
                    </Button> &nbsp;
                    <Button onClick = {this.logout} type='submit' value = 'submit' outline color="success">
                      Log Out
                    </Button>
                  </NavItem>
                </Nav>    
            }
            </Collapse>
          </NB>
        </div>
        )
    }

}

export default Navbar
