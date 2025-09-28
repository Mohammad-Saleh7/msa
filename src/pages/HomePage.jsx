import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../utils/dataServices";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

export default function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData("https://picsum.photos/v2/list?&limit=5").then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div>
      <Carousel>
        {images?.map((image) => (
          <Carousel.Item key={image.id}>
            <Image
              src={image.download_url}
              fluid
              style={{ width: "100vw", maxHeight: "100vh" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container>
        {" "}
        <Row>
          <Col className="m-5 d-flex justify-content-center align-items-center">
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda dolor alias nihil exercitationem odio officia non
              necessitatibus. Expedita, corporis? Reprehenderit eveniet, quo,
              cupiditate praesentium consequuntur, enim impedit soluta rerum
              magni repudiandae iste earum necessitatibus facere corrupti. Quo
              iusto officia itaque voluptatem eveniet, provident aperiam
              laudantium fuga quam accusantium dicta corporis iste commodi a,
              nostrum, quibusdam corrupti deserunt. Soluta tenetur officiis
              ipsum saepe est? Suscipit culpa obcaecati, maiores voluptates
              architecto repellat laboriosam asperiores sapiente possimus
              temporibus, dolore ad. Temporibus tenetur reprehenderit, earum
              facere non laborum omnis quibusdam asperiores deleniti saepe cum?
              Quo velit placeat pariatur quaerat ex odit voluptatum! Culpa,
              earum.
            </p>
          </Col>
          <Col className="m-5">
            <Image
              src="https://picsum.photos/200"
              width={400}
              height={400}
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
