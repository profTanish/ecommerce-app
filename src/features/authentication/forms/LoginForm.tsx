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
import { loginValidation } from "@/lib/validation";

import { Link } from "react-router-dom";
import { useLogin } from "@/features/authentication/useLogin";
import Spinner from "../../../components/Spinner";
import { useUser } from "@/features/authentication/useUser";

const LoginForm = () => {
    const { login, isPending } = useLogin();
    const { user } = useUser();

    const form = useForm<z.infer<typeof loginValidation>>({
        resolver: zodResolver(loginValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof loginValidation>) {
        if (!values) return;

        const { email, password } = values;

        login({ email, password });
    }

    return (
        <div className="sm:w-[35rem] px-16 py-10 bg-lightGray border border-darkGray rounded-lg mx-auto">
            <Form {...form}>
                <h3 className="heading-tertiary mb-5 text-center">
                    Log in to your account
                </h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        disabled={isPending}
                                        placeholder="andrija@office.com"
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <Button type="submit" disabled={isPending} className="w-full">
                        {!isPending ? "Log in" : <Spinner />}
                    </Button>

                    <p className="text-textGray text-center">
                        Don&apos;t have an account?
                        <Link to="/signup" className="text-blue-500 ml-1">
                            Sign up
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
