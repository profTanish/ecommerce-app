import { z } from "zod";

const addressSchema = z.object({
    phone: z.string().min(1, { message: "Phone number is required." }),
    city: z.string().min(1, { message: "City is required." }),
    street: z.string().min(1, { message: "Street address is required." }),
});

export const orderValidation = z.object({
    fullName: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    address: addressSchema,
});