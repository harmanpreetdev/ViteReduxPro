import { useAppDispatch } from "@/app/hooks";
import { loginUser } from "@/features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormInputs = z.infer<typeof validationSchema>;

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(loginUser(data));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
