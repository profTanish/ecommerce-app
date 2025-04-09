import { z } from "zod";

// Authentication
export const loginValidation = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Passwords must be at least 8 characters." }),
});

const addressSchema = z.object({
    phone: z.string().min(1, { message: "Phone number is required." }),
    city: z.string().min(1, { message: "City is required." }),
    street: z.string().min(1, { message: "Street address is required." }),
});

export const signupValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "Passwords must be at least 8 characters." }),
    address: addressSchema,
});

export const userUpdateValidation = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .optional(),
    email: z.string().email().optional(),
    address: addressSchema.partial(),
});

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