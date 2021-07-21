import { Fragment, useState } from "react";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import { saveProduct } from "../datasource/data";
import { LinkContainer } from "react-router-bootstrap";

const AddProduct = () => {
  const initialProduct = {
    name: "",
    lab: "",
    category: "Perfumeria",
    status: "Disponible",
    barCode: ""
  };
  const [product, setProduct] = useState(initialProduct);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const save = () => {
    var data = {
      ...product,
      barCode: null,
      barCodes: [product.barCode]
    };

    // ClubFarmaClient.create(data)
    saveProduct(data)
      .then(response => {
        // setProduct({
        //   id: response.data.id,
        //   title: response.data.title,
        //   description: response.data.description,
        //   published: response.data.published
        // });
        clearForm()
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const clearForm = () => {
    setProduct(initialProduct);
    setSubmitted(false);
  };

  return (
    <Fragment>
      <Row xs="auto" className="align-items-center">
        <Col xs={4}>
          <h1>Nuevo Producto</h1>
        </Col>
        <Col>
          <LinkContainer to="/products">
            <Button variant="secondary">Volver al listado</Button>
          </LinkContainer>
        </Col>
      </Row>
      {submitted &&
        <Row>
          <Col xs={6}>
            <Alert variant="success">
              Producto creado!
            </Alert>
          </Col>
        </Row>
      }

      <Row>
        <Col xs={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre de producto" name="name" onChange={handleInputChange} value={product.name} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Laboratorio</Form.Label>
              <Form.Control type="text" placeholder="Laboratorio" name="lab" onChange={handleInputChange} value={product.lab} />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Codigo de Barra</Form.Label>
              <Form.Control type="text" placeholder="Codigo" name="barCode" onChange={handleInputChange} value={product.barCode} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select" name="category" onChange={handleInputChange} defaultValue={product.category}>
                <option value="Perfumeria">Perfumeria</option>
                <option value="Farmacia">Farmacia</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" name="status" onChange={handleInputChange} defaultValue={product.status}>
                <option value="Disponible">Disponible</option>
                <option value="En Falta">En falta</option>
                <option value="Discontinuo">Discontinuo</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={save}>
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>

    // <div className="submit-form">
    //   {submitted ? (
    //     <div>
    //       <h4>You submitted successfully!</h4>
    //       <button className="btn btn-success" onClick={newProduct}>
    //         Add
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       <div className="form-group">
    //         <label htmlFor="title">Title</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="title"
    //           required
    //           value={product.title}
    //           onChange={handleInputChange}
    //           name="title"
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="description">Description</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           id="description"
    //           required
    //           value={product.description}
    //           onChange={handleInputChange}
    //           name="description"
    //         />
    //       </div>

    //       <button onClick={saveProduct} className="btn btn-success">
    //         Submit
    //       </button>
    //     </div>
    //   )}
    // </div>
  );

}

export default AddProduct;