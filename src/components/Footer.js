import React from 'react'
import { Link } from 'react-router-dom';

import { Container } from 'reactstrap';

class Footer extends React.Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <Container style={{backgroundColor:'#F8F9FA'}} className='shadow'>            
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">
        

              <div className="col-md-2 mb-3" >
                <h6 className="text-uppercase font-weight-bold" >
                  <a href="/pages/aboutus.js" style={{color:'#28A745'}}>About us</a>
                </h6>
              </div>

        

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="/pages/products.js" style={{color:'#28A745'}}>Products</a>
                </h6>
              </div>


              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="/pages/contact.js" style={{color:'#28A745'}}>Contact</a>
                </h6>
              </div>

        
            </div>

            <hr className="rgba-white-light" style={{margin: "0 15%"}} />



            <hr className="clearfix d-md-none rgba-white-light" style={{margin: "10% 15% 5%"}} />
                
          <div style={{color:'#28A745'}} className="footer-copyright text-center py-3">© 2023 Copyright:
            <a style={{color:'#28A745'}} href="https://durumeats.com"> durumeats.com</a>
          </div>

            </Container>

        )

    }
}

export default Footer





