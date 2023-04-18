import React from 'react'

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
                  <a href="#!" style={{color:'#28A745'}}>About us</a>
                </h6>
              </div>

        

              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" style={{color:'#28A745'}}>Products</a>
                </h6>
              </div>


              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" style={{color:'#28A745'}}>Contact</a>
                </h6>
              </div>

        
            </div>

            <hr className="rgba-white-light" style={{margin: "0 15%"}} />
        

            <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
              <div className="col-md-8 col-12 mt-5">
                    <p><h1>¡Bienvenido a DurumEats!</h1></p> <p>Somos la plataforma web de delivery de kebabs que te permite disfrutar de la auténtica comida turca desde la comodidad de tu hogar.</p>

                    <p>Con DurumEats, puedes personalizar tu kebab a tu gusto escogiendo los ingredientes que más te gusten desde nuestra página web fácil de usar. Desde la carne hasta las salsas, puedes seleccionar los ingredientes de tu elección y personalizar tu pedido como lo prefieras.</p>

                    <p>Pero eso no es todo, con DurumEats, puedes elegir en qué restaurante de kebabs deseas que se prepare tu pedido. De esta manera, puedes estar seguro de que tu kebab será preparado fresco y a tu gusto en el restaurante que prefieras.</p>
              </div>
            </div>
            <hr className="clearfix d-md-none rgba-white-light" style={{margin: "10% 15% 5%"}} />
                
          <div style={{color:'#28A745'}} className="footer-copyright text-center py-3">© 2023 Copyright:
            <a style={{color:'#28A745'}} href="https://durumeats.com"> durumeats.com</a>
          </div>

            </Container>

        )

    }
}

export default Footer





