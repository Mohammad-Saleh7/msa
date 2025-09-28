import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export default function Login() {
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
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          Login
        </Button>
      </Form>
    </div>
  );
}
