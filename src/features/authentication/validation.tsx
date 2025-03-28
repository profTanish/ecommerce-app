import { z } from "zod";

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