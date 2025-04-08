import { Col, Form } from "react-bootstrap";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  placeholder: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const FormField = <T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  register,
  required,
  error,
}: FormFieldProps<T>) => {
  return (
    <Form.Group as={Col} md="6">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        isInvalid={!!error}
        {...register(name, {
          required: required ? "This field is required" : false,
        })}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormField;
