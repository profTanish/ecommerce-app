import { useQuery } from "@tanstack/react-query";
import { getRecommendedProducts } from "../../services/apiProducts";

export function useRecommendedProducts() {
    const { isLoading, data } = useQuery({
        queryKey: ["recommendedProducts"],
        queryFn: getRecommendedProducts,
    });

    const recommendedProducts = data?.data ?? null;

    return { isLoading, recommendedProducts };
}