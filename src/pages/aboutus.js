import React from 'react';
import { Container } from 'reactstrap';
import Helmet from 'react-helmet';
// Commit main
const AboutUsPage = () => {
    return (
        <Container>
            <Helmet>
                <title>Sobre nosotros - DurumEats</title>
            </Helmet>
            <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                <div className="col-md-8 col-12 mt-5"><h1 >Sobre Nosotros</h1>
                    <p>Somos una plataforma web de delivery de kebabs que te permite disfrutar de la auténtica comida turca desde la comodidad de tu hogar.</p>
                    <p>Con DurumEats, puedes personalizar tu kebab a tu gusto escogiendo los ingredientes que más te gusten desde nuestra página web fácil de usar. Desde la carne hasta las salsas, puedes seleccionar los ingredientes de tu elección y personalizar tu pedido como lo prefieras.</p>
                    <p>Pero eso no es todo, con DurumEats, puedes elegir en qué restaurante de kebabs deseas que se prepare tu pedido. De esta manera, puedes estar seguro de que tu kebab será preparado fresco y a tu gusto en el restaurante que prefieras.</p>
                    <p className="header-image-about center">
                        <img  src={require('../images/Carousal 3.jpg')} alt="" />
                    </p>
                    <p>Como podrás ver, los kebabs turcos son una deliciosa opción para disfrutar en cualquier momento. En DurumEats, nos aseguramos de que nuestros clientes puedan personalizar su pedido para que obtengan una experiencia única y satisfactoria.</p>
                    <p>Además, al permitirles elegir el restaurante en el que se preparará su comida, nuestros clientes pueden estar seguros de que su kebab será fresco y de la mejor calidad.</p>
                    <p>No esperes más y prueba DurumEats para disfrutar de la auténtica comida turca desde la comodidad de tu hogar. ¡Te garantizamos que no te arrepentirás!</p>
                </div>
            </div>
        </Container>
    );
};

export default AboutUsPage;
