import { useAppDispatch } from "@/app/hooks";
import { registerUser } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const validationSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormInputs = z.infer<typeof validationSchema>;

export const useRegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await dispatch(registerUser(data));
      reset();
      navigate("/auth/login");
    } catch (error) {
      console.log("Registration failed:", error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
