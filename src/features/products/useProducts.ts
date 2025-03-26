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

  // Sort by
  const sortByRaw = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const { isLoading, data } = useQuery<QueryData>({
    queryKey: ["products", page, filter, sortBy],
    queryFn: () => getProducts({ page, filter, sortBy }),
  });

  const products = data?.data ?? null;
  const count = data?.count ?? null;

  return { isLoading, products, count };
}