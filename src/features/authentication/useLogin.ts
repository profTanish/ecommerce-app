import { login as loginApi } from "@/services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) =>
            loginApi({ email, password }),
        onSuccess: () => {
            navigate("/");
            toast.success("Successfully logged in!");
        },
        onError: (err) => {
            console.log("error", err);
            toast.error("Invalid credentials!");
        },
    });

    return { login, isPending };
}