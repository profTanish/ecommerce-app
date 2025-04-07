import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { passwordValidation } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateUser } from "../authentication/useUpdateUser";
import Spinner from "@/components/Spinner";

const AccountPassword = () => {
    const { updateUser, isUpdating } = useUpdateUser();

    const form = useForm<z.infer<typeof passwordValidation>>({
        resolver: zodResolver(passwordValidation),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    function onSubmit(values: z.infer<typeof passwordValidation>) {
        const { password } = values;

        updateUser({ password });
    }

    return (
        <Form {...form}>
            <div className="p-2.5 space-y-5">
                <h2 className="heading-tertiary">Password Change</h2>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            className="border-darkGray w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            className="border-darkGray w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" disabled={isUpdating}>
                        {!isUpdating ? " Update password" : <Spinner />}
                    </Button>
                </form>
            </div>
        </Form>
    );
};

export default AccountPassword;