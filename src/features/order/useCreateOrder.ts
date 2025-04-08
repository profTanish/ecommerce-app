import { createNewOrder } from "@/services/apiOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreateOrder() {
    const queryClient = useQueryClient();

    const { mutate: createOrder, isPending: isCreatingOrder } = useMutation({
        mutationFn: createNewOrder,
        onSuccess: (data) => {
            toast.success("Your order is successfully created!");
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            return data;
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreatingOrder, createOrder };
}