import { login as loginApi } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) =>
            loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/", { replace: true });
            toast.success("Successfully logged in!");
        },
        onError: (err) => {
            console.log("error", err);
            toast.error("Invalid credentials!");
        },
    });

    return { login, isPending };
}