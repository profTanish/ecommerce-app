import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

type getProductsProps = {
  page: number;
  filter: {
    fieldName: string;
    value: string;
  } | null;
};

export async function getProducts({ page, filter }: getProductsProps) {
  let query = supabase.from("products").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  // Filter
  if (filter !== null) query = query.eq(filter.fieldName, filter.value);

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded.");
  }

  return { data, count };
}