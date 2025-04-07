import { createNewOrder } from "@/services/apiOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateOrder() {
    const queryClient = useQueryClient();

    const { mutate: createOrder, isPending: isCreating } = useMutation({
        mutationFn: createNewOrder,
        onSuccess: () => {
            toast.success("Your order is successfully created!");
            queryClient.invalidateQueries({ queryKey: ["orders"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createOrder };
}