import { PAGE_SIZE } from "../lib/constants";
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

export async function getProductById(id?: string) {
  if (!id) throw Error;

  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product not found");
  }

  return data;
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

export async function getProductsByCategory(category: string | null) {
  if (!category) throw Error;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error(error);
    throw new Error("Related products not found");
  }

  return data;
}