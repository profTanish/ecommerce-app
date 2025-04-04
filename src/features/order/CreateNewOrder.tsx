import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { orderValidation } from "./validation";

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

const CreateNewOrder = () => {
    const form = useForm<z.infer<typeof orderValidation>>({
        resolver: zodResolver(orderValidation),
        defaultValues: {
            fullName: "",
            email: "",
            address: {
                phone: "",
                city: "",
                street: "",
            },
        },
    });

    function onSubmit(values: z.infer<typeof orderValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <div className="max-w-container mx-auto flex items-center justify-between py-16">
                <div className="basis-1/2">
                    <h3 className="text-darkSlate text-5xl font-bold mb-2.5">
                        Create new order
                    </h3>
                    <p className="text-textGray max-w-md">
                        Please fill the form beneath in order to continue. Remember do not
                        use real data because this is a test application and your data can
                        possibly get leaked!
                    </p>
                </div>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="max-w-xl space-y-4 basis-1/2"
                >
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
                                        placeholder="hellotanish2000@gmail.com"
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
                        name="address.phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="7489403187"
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
                    <Button type="submit" className="w-full text-md" size="lg">
                        <span>
                            <HiOutlineTruck className="text-2xl mr-2" />
                        </span>
                        Place Order
                    </Button>
                </form>
            </div>
        </Form >
    );
};

export default CreateNewOrder;