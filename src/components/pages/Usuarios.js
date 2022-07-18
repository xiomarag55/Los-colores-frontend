import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import FooterComp from '../FooterComp';
import '../../App.css';

class Usuarios extends Component {
    render() {
        return (
            <div>
                <div className='Table'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre Completo</th>
                                <th>Usuario</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <FooterComp />
            </div>
        );
    }
}

export default Usuarios;
