import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const products = [
    { id: 1, name: "Durum tradicional", description: "Pan árabe, carne de res, lechuga, tomate, cebolla, pepino, salsa de yogur y tahini"},
    { id: 2, name: "Durum de pollo", description: "Pan árabe, pollo, lechuga, tomate, cebolla, pepino, salsa de yogur y tahini" },
    { id: 3, name: "Durum de cordero", description: "Pan árabe, carne de cordero, lechuga, tomate, cebolla, pepino, salsa de yogur y tahini" },
    { id: 4, name: "Durum vegetariano", description: "Pan árabe, falafel, lechuga, tomate, cebolla, pepino, salsa de yogur y tahini" },
    { id: 5, name: "Durum mixto", description: "Pan árabe, carne de res, pollo, lechuga, tomate, cebolla, pepino, salsa de yogur y tahini" },
    { id: 6, name: "Falafel", description: "Falafel es una opción vegetariana de nuestro Durum mixto, preparado con deliciosos falafel fritos hechos con garbanzos y especias." }
];

const Products = () => {
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col md={4} sm={6} xs={12} key={product.id}>
                        <div className="card mb-4 d-flex flex-column" style={{ flexGrow: 1 }}>
                            <img className="card-img-top" src={require(`../images/${product.id}.jpg`)} alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
