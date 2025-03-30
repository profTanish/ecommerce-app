import { getProductById } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useProduct() {
    const { productId } = useParams();

    const {
        isLoading,
        data: product,
        error,
    } = useQuery({
        queryKey: ["booking", productId],
        queryFn: () => getProductById(productId),
        retry: false,
    });

    return { isLoading, error, product };
}