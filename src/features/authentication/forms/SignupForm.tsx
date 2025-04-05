import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupValidation } from "@/lib/validation";

import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useSignup } from "../useSignup";

const SignupForm = () => {
    const { signup, isPending } = useSignup()

    const form = useForm<z.infer<typeof signupValidation>>({
        resolver: zodResolver(signupValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof signupValidation>) {
        console.log(values);

        if (!values) return;

        const { name, email, password } = values;

        signup({ name, email, password });
    }

    return (
        <div className="sm:w-[35rem] px-16 py-10 bg-lightGray border border-darkGray rounded-lg mx-auto">
            <Form {...form}>
                <h3 className="heading-tertiary mb-5 text-center">
                    Create a new account
                </h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Andrija Djordjevic"
                                        disabled={isPending}
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="andrija@office.com"
                                        disabled={isPending}
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="shad-form_label">Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        disabled={isPending}
                                        className="shad-input"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isPending} className="w-full">
                        {!isPending ? "Sign up" : <Spinner />}
                    </Button>

                    <p className="text-textGray text-center">
                        Already have an account?
                        <Link to="/login" className="text-blue-500 ml-1">
                            Sign in
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default SignupForm;