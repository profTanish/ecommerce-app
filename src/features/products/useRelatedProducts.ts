import { getProductsByCategory } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export function useRelatedProducts(category: string | null) {
    const {
        isLoading,
        data: relatedProducts,
        error,
    } = useQuery({
        queryKey: ["relatedProducts", category],
        queryFn: () => getProductsByCategory(category),
    });

    return { isLoading, error, relatedProducts };
}