import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import cemento from '../../assets/images/cemento.jpg';
import taladro from '../../assets/images/taladro.jpg';
import madera from '../../assets/images/madera.jpg';
import brilladora from '../../assets/images/brilladora.jpg';
import '../../App.css';

class CardComp extends Component {
    render() {
        return (
            <div className='Card1'>
                <Row xs={1} md={2} className="g-4">
                    
                        <Col>
                            <Card>
                                <Card.Img  className="img-cemento" variant="top" src={taladro}/>
                                <Card.Body>
                                    <Card.Title>Taladro Metabo</Card.Title>
                                    <Card.Text>
                                    Taladro de martillo sin escobillas 18V sin escobillas desnudo de Metabo SB 18 LT.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img  className="img-cemento" variant="top" src={cemento}/>
                                <Card.Body>
                                    <Card.Title>Cemento Cemex</Card.Title>
                                    <Card.Text>
                                    Cemento Cemex Super Resistente 50kg.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img  className="img-cemento" variant="top" src={madera}/>
                                <Card.Body>
                                    <Card.Title>Madera de Nogal</Card.Title>
                                    <Card.Text>
                                    Madera de nogal negro de 3-4 "x 2" x 12" - 4 paquetes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img  className="img-cemento" variant="top" src={brilladora}/>
                                <Card.Body>
                                    <Card.Title>Brilladora Lux</Card.Title>
                                    <Card.Text>
                                    Brilladora Profesional 1.5 H.P Rojo Cromado Lux32018
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                </Row>
            </div>
        );
    }
}

export default CardComp;
