import React from "react";
import { Container, Image } from "react-bootstrap";

export default function NotFound() {
  return (
    <div>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Image
          src="./error.png"
          roundedCircle
          style={{ maxWidth: "90vh", maxHeight: "80vh" }}
        />
      </Container>
    </div>
  );
}
