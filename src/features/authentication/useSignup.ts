import { signup as signupApi } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: signup, isPending } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/", { replace: true });
            toast.success(
                "Account successfully created! Please check your email to confirm your account!"
            );
        },
    });

    return { signup, isPending };
}