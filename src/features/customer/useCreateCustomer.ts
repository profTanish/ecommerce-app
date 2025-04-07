import { createCustomer } from "@/services/apiCustomer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateCustomer() {
    const queryClient = useQueryClient();

    const { mutate: createNewCustomer, isPending: isCreating } = useMutation({
        mutationFn: createCustomer,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["customer"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createNewCustomer };
}