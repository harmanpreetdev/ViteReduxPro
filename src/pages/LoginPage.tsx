import { FormField } from "@/components";
import { LoginFormInputs, useLoginForm } from "@/hooks/useLoginForm";
import { HelmetMeta } from "@/utils";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginPage = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();
  return (
    <>
      <HelmetMeta
        title="Login Page"
        description="Login to access your account"
        keywords="login, authentication"
      />
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <FormField<LoginFormInputs>
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              required
              error={errors.email?.message}
            />
            <FormField<LoginFormInputs>
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              required
              error={errors.password?.message}
            />
            <Col md="12">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LoginPage;
