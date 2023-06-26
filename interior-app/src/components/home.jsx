import "./navbars.css";
import React from "react";
import Container from "react-bootstrap/Container";
import "./navbars.css";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./footer";

function Home() {
  return (
    <>
      <div className="carousal">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="bold text-primary">CREATIVE INTERIOR IDEAS</h3>
              <h1>Make Your Place Better</h1>
              <Button>More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="bold text-primary">CREATIVE INTERIOR IDEAS</h3>
              <h1>Stay At Home In Peace</h1>
              <Button>More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container fluid>
        <Row>
          <Col>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135803.png"
              alt='logo'
              height="30px"
              width="30px"
            ></img>
            <h3>Our Office</h3>
            <h5>Address</h5>

            <p>
              Mala-Gov.Hospital road <br />
              Thrissur Kerala
            </p>
          </Col>
          <Col>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3296/3296467.png"
              alt='LOGO'
              height="30px"
              width="30px"
            ></img>
            <h3>Email Us</h3>
           <p> <a href='mailto:info@abheesinteriors.com'>
              info@abheesinteriors.com</a> <br />
              <a href='mailto:saju@abheesinteriors.com'>saju@abheesinteriors.com</a></p>
            
          </Col>
          <Col>
            <img
              src="https://cdn-icons-png.flaticon.com/128/673/673674.png"
              alt='logo'
              height="30px"
              width="30px"
            ></img>
            <h3>Call Us</h3>
            <p>
              +91 9544595880 <br />
              +91 7907534215
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm className="bg-primary m-auto">
            <br />
            <br />
            <br />
            <h3 className="h3 text-center text-white">Office Room</h3>
            <h1 className="h1 text-center">
              OFFICE ROOM DESIGN <br />
              <br />
              <br />
            </h1>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 class="h3 text-center"> Living Room </h2>
        <Row>
          <Col sm className="bg-primary m-auto">
            <br />
            <br />
            <br />
            <h3 className="h3 text-center text-white">Living Room</h3>
            <h1 className="h1 text-center">
              LIVING ROOM DESIGN
              <br />
              <br />
              <br />
            </h1>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 class="h3 text-center"> Toilet </h2>
        <Row>
          <Col sm className="bg-primary m-auto">
            {" "}
            <br />
            <br />
            <br />
            <h3 className="h3 text-center text-white">Toilet</h3>
            <h1 className="h1 text-center">
              TOILET DESIGN
              <br />
              <br />
              <br />
            </h1>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 class="h3 text-center"> WashRoom </h2>
        <Row>
          <Col sm className="bg-primary m-auto">
            <br />
            <br />
            <br />
            <h3 className="h3 text-center">WashRoom</h3>
            <h1 className="h1 text-center">
              WASHROOM DESIGN
              <br />
              <br />
              <br />
            </h1>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/seed/picsum/800/350"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/350"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=800"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <h3 class="h3 text-center"> Gallery </h3>
      <Container>
        <Row>
          <Col sm>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://abheesinteriors.com/kitchen/kitchen%20(1).jpeg"
              />
              <Card.Body>
                <Card.Title>
                  <h2 className="h2 text-center">Kitchen</h2>
                </Card.Title>
                <Card.Text></Card.Text>
                <Button>more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src="https://abheesinteriors.com/kitchen/kitchen%20(1).jpeg"
              />
              <Card.Body>
                <Card.Title>
                  <h2 className="h2 text-center">Furniture</h2>
                </Card.Title>
                <Card.Text></Card.Text>
                <Button>more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "20rem"}}>
              <Card.Img
                variant="top"
                src="https://abheesinteriors.com/kidesbed/kidesbed%20(4).jpeg"
              />
              <Card.Body>
                <Card.Title>
                  <h2 className="h2 text-center">Kids Bed</h2>
                </Card.Title>
                <Card.Text></Card.Text>
                <Button>more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://abheesinteriors.com/dining/dining%20(1).jpeg"
              />
              <Card.Body>
                <Card.Title>
                  <h2 className="h2 text-center">Dining Table</h2>
                </Card.Title>
                <Card.Text></Card.Text>
                <Button>more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
