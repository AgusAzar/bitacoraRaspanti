import React from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";

export default () => {
  return (
    <Container>
      <h1 className="text-center">Clase 3</h1>
      <h3>Rol e identidad docente en la era digital</h3>
      <Row md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.caracteristicas.co/wp-content/uploads/2018/07/estado-solido-piedras-e1572821822852.jpg"
              style={{ height: "250px" }}
            />
            <Card.Body>
              <Card.Title>Mundo sólido</Card.Title>
              <Card.Text>
                <p>Rígido, estancado</p>
                <p>La educación no esta abierta al cambio</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://como-funciona.co/wp-content/uploads/2021/03/Estado-Liquido-de-la-materia.jpg"
              style={{ height: "250px" }}
            />
            <Card.Body>
              <Card.Title>Mundo líquido</Card.Title>
              <Card.Text>
                <p>Flexible, adaptable, en constante fluir</p>
                <p>
                  Los contenidos son pasajeros, lo que perdura es la capacidad
                  para encontrarlos...
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.beservices.es/pics_fotosnoticias/5438/big_crop_trabajar-en-la-nube.jpg"
              style={{ height: "250px" }}
            />
            <Card.Body>
              <Card.Title>Mundo etéreo</Card.Title>
              <Card.Text>
                <p>Virtualizacion, la nube</p>
                <p>Aún más flexible que el líquido</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
