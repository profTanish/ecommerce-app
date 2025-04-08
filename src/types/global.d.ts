import type { Database } from "../types/database.types";

declare global {
  type product = Database["public"]["Tables"]["products"]["Row"];

  type Address = {
    phone: string;
    city: string;
    street: string;
  };

  type Customer = {
    address: Address | null;
    created_at: string;
    email: string | null;
    fullName: string | null;
    id: number;
  };

  type CartProduct = {
    productId: number;
    name: string;
    category: string;
    price: number;
    image: string;
    totalPrice: number;
    quantity: number;
  };

  type Option = {
    value: string;
    label: string;
  };
}