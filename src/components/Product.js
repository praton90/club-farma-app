import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
// import ClubFarmaClient from "../client/club-farma-client";
import { LinkContainer } from "react-router-bootstrap";
import { findProduct } from "../datasource/data";

const Product = props => {
    const initialProductState = {
        id: null,
        name: "",
        lab: "",
        category: "",
        status: "",
        barCodes: []
    };
    const [currentProduct, setCurrentProduct] = useState(initialProductState);
    // const [message, setMessage] = useState("");

    const getProduct = id => {
        // ClubFarmaClient.get(id)
        findProduct(id)
            .then(response => {
                setCurrentProduct(response);
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProduct(props.match.params.id);
    }, [props.match.params.id]);

    return (
        <Fragment>
            <Row xs="auto" className="align-items-center">
                <Col>
                    <h1>Detalle de producto</h1>
                </Col>
                <Col>
                    <LinkContainer to="/products">
                        <Button variant="secondary">Volver al listado</Button>
                    </LinkContainer>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    {currentProduct ? (
                        <Table>
                            <tbody>
                                <tr>
                                    <td style={{ fontWeight: "bold" }}>Nombre</td>
                                    <td>{currentProduct.name}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold" }}>Laboratorio</td>
                                    <td>{currentProduct.lab}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold" }}>Codigos de barra</td>
                                    <td>
                                        <ul>
                                            {currentProduct.barCodes.map((barCode, index) => <li key={index}>{barCode}</li>)}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold" }}>Estado</td>
                                    <td>{currentProduct.status}</td>
                                </tr>
                            </tbody>
                        </Table>
                    ) : (
                        <p>Por favor seleccione un producto para ver el detalle</p>
                    )
                    }
                </Col>
            </Row>
        </Fragment>
    );
};

export default Product;