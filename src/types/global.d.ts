import type { Database } from "../types/database.types";
 
 declare global {
   type product = Database["public"]["Tables"]["products"]["Row"];
 }