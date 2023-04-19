import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import durum1 from '../images/durum1.jpg';
import durum2 from '../images/durum2.jpg';
import durum3 from '../images/durum3.jpg';

const Products = () => {
    return (
        <Container>
            <h1 className="text-center mt-5">Productos</h1>
            <Row className="mt-5">
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src={durum1} alt="Durum 1" />
                        <CardBody>
                            <CardTitle>Durum Kebab</CardTitle>
                            <CardText>Un delicioso kebab envuelto en pan pita y relleno de tus ingredientes favoritos.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src={durum2} alt="Durum 2" />
                        <CardBody>
                            <CardTitle>Durum Doner</CardTitle>
                            <CardText>Un kebab de carne asada, acompañado de lechuga, tomate, cebolla y salsa.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardImg top width="100%" src={durum3} alt="Durum 3" />
                        <CardBody>
                            <CardTitle>Durum Falafel</CardTitle>
                            <CardText>Un kebab vegetariano, relleno de falafel, ensalada, tomate y salsa.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Products;