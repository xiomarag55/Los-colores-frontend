import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Inicio from '../pages/Inicio';
import Productos from '../pages/Productos.js';
import Ventas from '../pages/Ventas.js';
import Usuarios from '../pages/Usuarios';
import LoginComp from '../pages/LoginComp';

class NavbarComp extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Los Colores</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/inicio"}>Inicio</Nav.Link>
                                <Nav.Link as={Link} to={"/ventas"}>Ventas</Nav.Link>
                                <Nav.Link as={Link} to={"/productos"}>Productos</Nav.Link>
                                <Nav.Link as={Link} to={"/usuarios"}>Usuarios</Nav.Link>
                                <Nav.Link className='login' as={Link} to={"/login"}>Login</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/inicio" element={<Inicio />} />
                        <Route exact path="/ventas" element={<Ventas />} />
                        <Route exact path="/productos" element={<Productos />} />
                        <Route exact path="/usuarios" element={<Usuarios />} />
                        <Route exact path="/login" element={<LoginComp />} />
                    </Routes>
                </div>
            </>
        );
    }
}

export default NavbarComp;
