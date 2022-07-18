import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.png';
import '../../App.css';

class CarouselComp extends Component {
    render() {
        return (
            <div className='Carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Nuestros productos</h3>
                            <p>Tenemos diferentes articulos de construcción de la mejor cálidad.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Servicio de entrega a domicilio</h3>
                            <p>Nuestro de entrega a domicilio te permitirá comprar con más comodidad.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Las mejores marcas</h3>
                            <p>Contámos con proveedores certificados para brindarte la mejor experiencia.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselComp;