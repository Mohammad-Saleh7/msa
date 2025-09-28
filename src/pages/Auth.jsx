import { Col, Container, Image, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div>
      <Container style={{ minHeight: "70vh" }} className="my-5">
        <Row className="my-5">
          <Col className="d-flex justify-content-center gap-5">
            <Image src="/msa.png" width={100} height={60} />
            <h1>Welcome to MSA</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
