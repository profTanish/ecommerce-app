import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

type getProductsProps = {
  page: number;
  filter: {
    fieldName: string;
    value: string;
  } | null;
  sortBy: {
    field: string;
    direction: string;
  } | null;
};

export async function getProducts({ page, filter, sortBy }: getProductsProps) {
  let query = supabase.from("products").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  // Filter
  if (filter) query = query.eq(filter.fieldName, filter.value);

  // Sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded.");
  }

  return { data, count };
}

export async function getRecommendedProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .range(0, 2);

  if (error) {
    console.error(error);
    throw new Error("Recommended products could not be loaded.");
  }

  return { data, error };
}