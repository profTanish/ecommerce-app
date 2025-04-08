import { addDays, format } from "date-fns";
import { FLAT_SHIPPING_RATE, TAX_RATE } from "./constants";

export function capitalizeFirstLetter(
    category: string | null
): string | undefined {
    return category
        ?.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export const calculateShipping = (): number => {
    return FLAT_SHIPPING_RATE;
};

export const calculateTax = (subtotal: number): number => {
    return +(subtotal * TAX_RATE).toFixed(2);
};

export const calculateGrandTotal = (
    subtotal: number,
    shipping: number,
    tax: number
): number => {
    return subtotal + shipping + tax;
};

export const getEstimatedDeliveryDate = (
    createdAt: string,
    daysToAdd: number = 3
  ): string => {
    const createdDate = new Date(createdAt);
    const estimatedDeliveryDate = addDays(createdDate, daysToAdd);
    return format(estimatedDeliveryDate, "MMMM d, yyyy, hh:mm a");
  };