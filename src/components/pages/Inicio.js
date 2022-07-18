import React, { Component } from 'react';
import CarouselComp from './CarouselComp';
import CardComp  from './CardComp';
import FooterComp from '../FooterComp';

import '../../App.css';



class Inicio extends Component {
    render() {
        return (
            <div >
                <CarouselComp />
                <CardComp />
                <FooterComp />

            </div>
        );
    }
}

export default Inicio;