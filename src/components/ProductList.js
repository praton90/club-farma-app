import { Fragment, useState, useEffect } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import CustomSppiner from "./CustomSpinner";
import { getProducts, filterProducts } from '../datasource/data';

const ProductView = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetchProducts();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const fetchProducts = () => {
    setLoading(true);
    getProducts()
      .then(response => {
        setProducts(response);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      })

  };

  const findByTitle = () => {
    setFilterApplied(true);
    setLoading(true);
    filterProducts(searchTitle)
      .then(response => {
        console.log(response)
        setProducts(response);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  const viewProductDetails = (id) => history.push(`/products/${id}`)

  const removeFilters = () => {
    setFilterApplied(false);
    setSearchTitle("");
    fetchProducts();
  };

  return (
    <Fragment>
      <Row xs="auto" className="align-items-center">
        <Col xs={2}>
          <h1>Productos</h1>
        </Col>
        <Col>
          <LinkContainer to="/add">
            <Button variant="success">Nuevo Producto</Button>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div className="mb-3 input-group">
            <input type="text" placeholder="Nombre de producto" aria-label="Nombre de product" className="form-control" value={searchTitle} onChange={onChangeSearchTitle} />
            <button id="button-addon2" className="btn btn-outline-secondary" onClick={findByTitle}>Buscar</button>
          </div>
        </Col>

        {filterApplied &&
          <Col xs={3}>
            <Button variant="primary" onClick={removeFilters}>Quitar Filtros</Button>
          </Col>

        }
      </Row>

      {loading &&
        <CustomSppiner />
      }

      {products && !loading &&
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Codigos</th>
                  <th>Nombre</th>
                  <th>Laboratorio</th>
                  <th>Categoria</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) => (
                    <tr key={index} onClick={() => viewProductDetails(product.id)} style={{ cursor: "pointer" }}>
                      <td>{product.barCodes.length > 1 ? `${product.barCodes[0]} ( + ${product.barCodes.length - 1})` : product.barCodes[0]}</td>
                      <td>{product.name}</td>
                      <td>{product.lab}</td>
                      <td>{product.category}</td>
                      <td>{product.status}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>

          </Col>
        </Row>
      }
    </Fragment >

  )
}

export default ProductView;