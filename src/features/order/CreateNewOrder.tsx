import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { orderValidation } from "../../lib/validation";

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
import { HiOutlineTruck } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { Navigate } from "react-router-dom";
import { useCreateCustomer } from "../customer/useCreateCustomer";
import { useUser } from "../authentication/useUser";

const CreateNewOrder = () => {
    const cart = useSelector(getCart);
    const { user } = useUser();
    const { createNewCustomer, isCreating } = useCreateCustomer();

    const form = useForm<z.infer<typeof orderValidation>>({
        resolver: zodResolver(orderValidation),
        defaultValues: {
            fullName: user ? user.user_metadata.name : "",
            email: user ? user.user_metadata.email : "",
            address: {
                phone: "",
                city: "",
                street: "",
            },
        },
    });

    function onSubmit(values: z.infer<typeof orderValidation>) {
        createNewCustomer(values);
    }

    if (!cart.length) return <Navigate to="/cart" replace />;

    return (
        <Form {...form}>
            <div className="mx-auto max-w-3xl pt-8 pb-16 space-y-10">
                <h2 className="heading-secondary mb-2.5 text-center">
                    Create new order
                </h2>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mx-auto max-w-xl space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Andrija Djordjevic"
                                            {...field}
                                            className="border-darkGray"
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
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="andrijaweb@office.com"
                                            {...field}
                                            className="border-darkGray"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address.city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Belgrade"
                                            {...field}
                                            className="border-darkGray"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address.city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Jabalpur"
                                            {...field}
                                            className="border-darkGray"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address.street"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Street</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Rudarska 6a"
                                            {...field}
                                            className="border-darkGray"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <Button type="submit" className="w-full text-md" size="lg">
                            <span>
                                <HiOutlineTruck className="text-2xl mr-2" />
                            </span>
                            Place Order
                        </Button>
                        <p className="text-xs text-textGray mt-2">
                            Please fill the form above in order to continue. Remember do not
                            use real data because this is a test application and your data can
                            possibly get leaked!
                        </p>
                    </div>
                </form>
            </div>
        </Form >
    );
};

export default CreateNewOrder;