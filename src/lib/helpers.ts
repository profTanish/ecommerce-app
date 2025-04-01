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