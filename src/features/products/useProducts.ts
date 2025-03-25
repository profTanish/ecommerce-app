import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

type QueryData = {
  data: product[] | null;
  count: number | null;
};

export function useProducts() {
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data } = useQuery<QueryData>({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
  });

  const products = data?.data ?? null;
  const count = data?.count ?? null;

  return { isLoading, products, count };
}