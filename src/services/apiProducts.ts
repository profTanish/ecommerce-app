import supabase from "./supabase";
 
 export async function getProducts() {
   let { data, error } = await supabase.from("products").select("*");
 
   if (error) {
     console.error(error);
     throw new Error("Products could not be loaded.");
   }
 
   return data;
 }