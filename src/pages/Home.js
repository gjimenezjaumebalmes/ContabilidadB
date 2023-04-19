import React from 'react'
import Slider from 'infinite-react-carousel'
import '../resources/style.css'
import { Container } from 'reactstrap'


class  Home extends React.Component{
    constructor (props){
        super(props)
        this.state = {

        }
    }




  render() {
    const settings =  {
      autoplay: true,
      dots: true,
      duration: 100,
      initialSlide: false,
      // infinite: true,
    };
    return (
        <Container >
      <div>
        <Slider {...settings} >
            <div><img src={require('../images/Carousal 1.jpg')} alt=""/></div>
            <div><img src={require('../images/Carousal 2.jpg')} alt=""/></div>
            <div><img src={require('../images/Carousal 3.jpg')} alt=""/></div>
            <div><img src={require('../images/Carousal 4.jpg')} alt=""/></div>
            <div><img src={require('../images/Carousal 1.jpg')} alt=""/></div>
            <div><img src={require('../images/Carousal 3.jpg')} alt=""/></div>
        </Slider>
          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
              <div className="col-md-8 col-12 mt-5">
                  <p><h1>¡Bienvenido a DurumEats!</h1></p> <p>Somos la plataforma web de delivery de kebabs que te permite disfrutar de la auténtica comida turca desde la comodidad de tu hogar.</p>

                  <p>Con DurumEats, puedes personalizar tu kebab a tu gusto escogiendo los ingredientes que más te gusten desde nuestra página web fácil de usar. Desde la carne hasta las salsas, puedes seleccionar los ingredientes de tu elección y personalizar tu pedido como lo prefieras.</p>

                  <p>Pero eso no es todo, con DurumEats, puedes elegir en qué restaurante de kebabs deseas que se prepare tu pedido. De esta manera, puedes estar seguro de que tu kebab será preparado fresco y a tu gusto en el restaurante que prefieras.</p>
              </div>
          </div>
      </div>

      <br/><br/>
        </Container>

    )
  }
}

export default Home





