import { Row, Col, Card, Spinner } from "react-bootstrap";

const CustomSppiner = () => {
  return (<Row className="justify-content-md-center">
    <Col>
      <Card className="text-center">
        <Card.Header>Cargando...</Card.Header>
        <Card.Body>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Card.Body>
      </Card>
    </Col>
  </Row>);
}

export default CustomSppiner;