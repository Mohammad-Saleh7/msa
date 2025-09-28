import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";

export default function AboutPage() {
  const [isAgree, setIsAgree] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const helperText = {
    firstName: {
      required: "please enter first name!",
      maxLength: "first name should be less than 25 characters",
      minLength: "first name should be more than 3 characters",
    },
    lastName: {
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 2 characters",
    },
    email: {
      required: "Please enter Email!",
      pattern: "Please provide a valid email address.",
    },
    message: {
      required: "Please enter message",
      maxLength: "your input should less than 121 characters",
      minLength: "your input should more than 9 characters",
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3">About Us</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam odit maiores nostrum ratione, voluptate, atque aliquam
              sequi sunt nihil nobis voluptatem corrupti excepturi provident
              aliquid necessitatibus sit cumque amet, nisi quo eaque
              perferendis. Ut, quas nulla aliquam unde eaque vitae placeat
              culpa. Impedit dolores corrupti magnam unde ex, numquam eos nihil
              nam ad ab fugit ipsum iure, reprehenderit nostrum tempore! Officia
              labore cupiditate eligendi ea, consectetur id maiores perferendis
              eos illo et autem sequi ut qui, provident tenetur, eius vitae
              alias deserunt molestias! Animi dolore possimus sunt tempora atque
              consectetur labore ipsa ducimus debitis dignissimos fugiat
              voluptate, corporis minima necessitatibus veritatis sapiente dicta
              facilis magnam totam deserunt? Asperiores nulla ipsam id, sequi
              harum nobis, delectus dolore reprehenderit nam, pariatur maxime
              non. Amet nobis recusandae eos molestias voluptate suscipit totam,
              ipsam ullam corrupti qui tenetur commodi odio odit rerum ipsum
              iusto ea harum modi eveniet facilis obcaecati iure placeat unde?
              Beatae quos, error, recusandae tempora sed quasi a similique
              voluptates ducimus facere sit sapiente consectetur minus
              consequatur, quae numquam odit nulla doloribus dolorem sunt
              aspernatur quas in natus. Aut praesentium quaerat fugiat deserunt?
              Dolorem nobis, dolore illo, ipsum praesentium culpa voluptates in
              deleniti minima ad mollitia corporis atque assumenda saepe itaque
              neque accusantium sint eveniet aspernatur suscipit! Eum quos ad et
              quasi facere id fugiat vero deserunt quam dolorum magni beatae cum
              voluptate at repellendus, recusandae, qui omnis aliquid distinctio
              voluptas sequi soluta cupiditate pariatur! Perspiciatis
              voluptatibus, libero, facere maiores tenetur fugiat molestias
              aperiam maxime quo, odio explicabo asperiores! Unde, culpa?
            </p>
          </Col>
        </Row>
        <Row className="mb-5 justify-content-center align-items-center ms-5">
          <Col className="m-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  {...register("firstName", {
                    required: true,
                    maxLength: 25,
                    minLength: 3,
                  })}
                />
                {errors.firstName && (
                  <Form.Text className="text-danger">
                    {helperText.firstName[errors.firstName["type"]]}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  {...register("lastName", {
                    required: false,
                    maxLength: 25,
                    minLength: 3,
                  })}
                />
                {errors.lastName && (
                  <Form.Text className="text-danger">
                    {helperText.lastName[errors.lastName["type"]]}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">
                    {helperText.email[errors.email["type"]]}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your message"
                  style={{ height: "100px" }}
                  {...register("message", {
                    required: false,
                    minLength: 9,
                    maxLength: 121,
                  })}
                />
                {errors.message && (
                  <Form.Text className="text-danger">
                    {helperText.message[errors.message["type"]]}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="agree-checkbox">
                <Form.Check
                  type="checkbox"
                  label="Check me out"
                  onChange={(e) => setIsAgree(e.target.checked)}
                  checked={isAgree}
                  id="agree-checkbox"
                />
              </Form.Group>
              <Button className="button-one" type="submit" disabled={!isAgree}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="m-5">
            <Image
              src="/secretary.png"
              roundedCircle
              width={400}
              height={400}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
