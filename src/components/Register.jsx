import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export default function Register() {
  const [isAgree, setIsAgree] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const helperText = {
    email: {
      required: "Email is Required",
      pattern: "Invalid Email Address",
    },
    password: {
      required: "password is Required",
      pattern: "Minimum eight characters",
    },
    name: {
      required: "Name is required",
      minLength: "your input should more than 2 characters",
      maxLength: "your input should less than 31 characters",
    },
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
              maxLength: 31,
              minLength: 2,
            })}
          />
          {errors.name && (
            <Form.Text className="text-danger">
              {helperText.name[errors.name.type]}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {helperText.email[errors.email.type]}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            })}
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {helperText.password[errors.password.type]}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="is-agree">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={(e) => setIsAgree(e.target.checked)}
            checked={isAgree}
            id="is-agree"
          />
        </Form.Group>
        <Button className="button-one" type="submit" disabled={!isAgree}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
