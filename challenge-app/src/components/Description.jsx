import React from "react";
import bikeplaceholder from "../assets/bikeplaceholder.png"
import { Card, Row, Col, Container, Image } from "react-bootstrap";

const Description = ({ title, description, location, dateoftheft, imagen }) => {
  return (
    <>
      <Card>
        <Card.Header>{title}</Card.Header>

        <Card.Body>
          <Container fluid>
            <Row className="align-items-center">
              <Col xs={3}>
                {imagen ? (
                  <img width={150} height={150} alt="171x180" src={imagen} />
                ) : (
                  <Image
                    src={bikeplaceholder}
                    width={150}
                    height={150}
                    alt="171x180"
                    thumbnail
                  />
                )}
              </Col>
              <Col xs={8}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <br></br>

                <Card.Text>
                  Localizacion: {location}
                  <br></br>
                  <br></br>
                  Fecha de Robo: {dateoftheft}
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <br></br>
    </>
  );
};
export default Description;
