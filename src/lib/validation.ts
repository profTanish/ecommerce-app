import { z } from "zod";

// Authentication
export const loginValidation = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Passwords must be at least 8 characters." }),
});

export const signupValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Passwords must be at least 8 characters." }),
});

// Order
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

// Account Settings
export const passwordValidation = z
    .object({
        password: z.string().min(2),
        confirmPassword: z.string().min(2),
    })
    .refine(
        (values) => {
            return values.password === values.confirmPassword;
        },
        { message: "Password must match!", path: ["confirmPassword"] }
    );