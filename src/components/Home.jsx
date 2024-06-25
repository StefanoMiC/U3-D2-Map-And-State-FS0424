import { Component } from "react";
import { Alert, Badge, Button, Carousel, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import menu from "../data/menu.json";

class Home extends Component {
  state = {
    selectedPasta: null // null permette di fare da argine su un controllo con un ternario / short circuit operator
  };

  render() {
    return (
      <Container fluid="md" className="mt-5">
        <Row className="justify-content-center">
          <Col xs={10} md={8} xl={4}>
            {/* short circuit operator - blocca la renderizzazione del codice alla destra del && se il valore a sinistra è falsy */}
            {this.state.selectedPasta && <Alert variant="info">Pasta selezionata</Alert>}
            <Carousel interval={1500}>
              {/* abbiamo ciclato l'array menu con il metodo map */}
              {menu.map(plate => {
                // abbiamo ritornato tanti Carousel.Item quanti erano gli elementi dell'array

                // IMPORTANTE:
                // 1) ricordarsi il return (implicito o esplicito dal map!)
                // 2) ricordarsi di applicare la prop key al primo elemento ritornato dal map (non sui figli)
                return (
                  <Carousel.Item key={`plate-${plate.id}`} onClick={() => this.setState({ selectedPasta: plate })}>
                    <div className="img-container">
                      <Image src={plate.image} className="img-fluid w-100" />
                    </div>
                    <Carousel.Caption>
                      <h3>{plate.name}</h3>
                      <p className="mb-2">{plate.description}</p>
                      <div>
                        <Badge bg="dark" className="mb-3">
                          {plate.price}€
                        </Badge>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={4}>
            {this.state.selectedPasta ? (
              <>
                <h4>Recensioni per: {this.state.selectedPasta.name}</h4>
                <ListGroup>
                  {this.state.selectedPasta.comments.map((review, index) => (
                    <ListGroup.Item key={`review-${index}`} className="d-flex justify-content-between align-items-center">
                      <span>
                        {review.author} — {review.comment}
                      </span>
                      <Badge bg="info">{review.rating}</Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </>
            ) : (
              <Alert variant="warning">Seleziona una pasta per leggere le recensioni ☝️</Alert>
            )}

            <Button variant="danger" onClick={() => this.setState({ selectedPasta: null })}>
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
