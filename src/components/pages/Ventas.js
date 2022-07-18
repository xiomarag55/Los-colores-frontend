import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../../App.css';
import FooterComp from '../FooterComp';

class Ventas extends Component {
    render() {
        return (
            <div>
                <div className='Table'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Unidades</th>
                                <th>Descuento</th>
                                <th>Valor total</th>
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

export default Ventas;