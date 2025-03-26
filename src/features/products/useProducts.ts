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

  // Filter
  const filteredValue = searchParams.get("category");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { fieldName: "category", value: filteredValue };

  const { isLoading, data } = useQuery<QueryData>({
    queryKey: ["products", page, filter],
    queryFn: () => getProducts({ page, filter }),
  });

  const products = data?.data ?? null;
  const count = data?.count ?? null;

  return { isLoading, products, count };
}