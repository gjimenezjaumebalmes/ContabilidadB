import React from 'react';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <Container>
            <Helmet>
                <title>Sobre nosotros</title>
                <meta name="description" content="Somos una plataforma web de delivery de kebabs que te permite disfrutar de la auténtica comida turca desde la comodidad de tu hogar." />
            </Helmet>
            <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

            </div>
        </Container>
    );
};

export default AboutUs;