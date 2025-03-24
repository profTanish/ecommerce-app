import { useQuery } from "@tanstack/react-query";
 import { getProducts } from "../../services/apiProducts";
 
 export function useProducts() {
   const { isLoading, data: products } = useQuery({
     queryKey: ["products"],
     queryFn: getProducts,
   });
 
   return { isLoading, products };
 }