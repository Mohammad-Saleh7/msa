import { useState } from "react";
import { Button, Col, Modal, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
export default function MangeCourse() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: location.state?.title || "",
      slug: location.state?.slug || "",
      authorId: location.state?.authorId || "",
      category: location.state?.category || "",
    },
  });
  const helperText = {
    title: {
      required: "Please enter course title",
      pattern: "Invalid Title",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
    slug: {
      required: "Please enter slug",
      pattern: "Invalid Slug",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
    authorId: {
      required: "Please provide a valid author ID.",
      pattern: "Invalid author ID",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
    category: {
      required: "Please provide a valid category.",
      pattern: "Invalid category",
      maxLength: "your input should less than 31 characters",
      minLength: "your input should more than 4 characters",
    },
  };
  const submitHandler = (data) => {
    console.log(data);
    setShow(false);
    reset();
  };
  return (
    <div>
      {" "}
      <Container style={{ minHeight: "70vh" }} className="my-5">
        <Row>
          <Col>
            <Form className="m-5">
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Course Title:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="For example 'OOP'"
                    {...register("title", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    })}
                  />
                </Form.Group>
                {errors.title && (
                  <Form.Text className="text-danger">
                    {helperText.title[errors.title["type"]]}
                  </Form.Text>
                )}
                <Form.Group as={Col} md="6">
                  <Form.Label>Slug:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="For example 'JavaScript'"
                    {...register("slug", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    })}
                  />
                </Form.Group>
                {errors.slug && (
                  <Form.Text className="text-danger">
                    {helperText.slug[errors.slug.type]}
                  </Form.Text>
                )}
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Author Id:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="For example 'MSA2025'"
                    {...register("authorId", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    })}
                  />
                </Form.Group>
                {errors.authorId && (
                  <Form.Text className="text-danger">
                    {helperText.authorId[errors.authorId.type]}
                  </Form.Text>
                )}

                <Form.Group as={Col} md="6">
                  <Form.Label>Category:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="For example 'Basic'"
                    {...register("category", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    })}
                  />
                </Form.Group>
                {errors.category && (
                  <Form.Text className="text-danger">
                    {helperText.category[errors.category.type]}
                  </Form.Text>
                )}
              </Row>

              <>
                <Button className="button-one" onClick={handleShow}>
                  Edit Course
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Course</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure about Editing this course?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="buttons" onClick={handleClose}>
                      No
                    </Button>
                    <Button
                      className="button-one"
                      onClick={handleSubmit(submitHandler)}
                    >
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              <Button className="buttons" onClick={() => navigate("/courses")}>
                Cancel
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
