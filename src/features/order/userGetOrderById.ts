import { getOrderById } from "@/services/apiOrder";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useGetOrderById() {
    const { orderId } = useParams();

    const {
        isLoading,
        data: order,
        error,
    } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => getOrderById(orderId),
        retry: false,
    });

    return { isLoading, error, order };
}