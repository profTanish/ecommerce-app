import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getProducts({ page }: { page: number }) {
  let query = supabase.from("products").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded.");
  }

  return { data, count };
}