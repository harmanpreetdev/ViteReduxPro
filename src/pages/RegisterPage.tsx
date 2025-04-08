import { useAppSelector } from "@/app/hooks";
import { FormField } from "@/components";
import {
  selectAuthError,
  selectAuthLoading,
} from "@/features/auth/authSelectors";
import { RegisterFormInputs, useRegisterForm } from "@/hooks/useRegisterForm";
import { HelmetMeta } from "@/utils";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

const RegisterPage = () => {
  const { register, handleSubmit, errors, onSubmit } = useRegisterForm();
  const loading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  return (
    <>
      <HelmetMeta
        title="Register Page"
        description="Register to access your account"
        keywords="register, authentication"
      />
      <Container>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <FormField<RegisterFormInputs>
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              register={register}
              required
              error={errors.username?.message}
            />
            <FormField<RegisterFormInputs>
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              required
              error={errors.email?.message}
            />
            <FormField<RegisterFormInputs>
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              required
              error={errors.password?.message}
            />
            <FormField<RegisterFormInputs>
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              register={register}
              required
              error={errors.confirmPassword?.message}
            />
            <Col md="12">
              {loading ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Registering...
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  Register
                </Button>
              )}
            </Col>
            {error && (
              <Col md="12" className="mt-3">
                <Alert variant="danger">{error}</Alert>
              </Col>
            )}
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default RegisterPage;
