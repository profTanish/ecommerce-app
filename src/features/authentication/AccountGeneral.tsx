import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userUpdateValidation } from "../../lib/validation";

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
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import Spinner from "@/components/Spinner";

const AccountGeneral = () => {
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const form = useForm<z.infer<typeof userUpdateValidation>>({
    resolver: zodResolver(userUpdateValidation),
    defaultValues: {
      name: user?.user_metadata.name || "",
      email: user?.user_metadata.email || "",
      address: {
        phone: user?.user_metadata.address?.phone || "",
        city: user?.user_metadata.address?.city || "",
        street: user?.user_metadata.address?.street || "",
      },
    },
  });

  function onSubmit(values: z.infer<typeof userUpdateValidation>) {
    const { name, address } = values;

    if (
      !name &&
      (!address?.phone || !address?.phone.trim()) &&
      (!address?.city || !address?.city.trim()) &&
      (!address?.street || !address?.street.trim())
    )
      return;

    updateUser(values);

    return (
      <Form {...form}>
        <div className="p-2.5 space-y-5">
          <h2 className="heading-tertiary">General Settings</h2>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
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

                        placeholder={`${user ? user.user_metadata.email : "andrija@example.com"
                          }`}
                        {...field}
                        disabled
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
                        placeholder="0616667301"
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

            <Button type="submit" className="">
              {isUpdating ? <Spinner /> : "Update profile"}
            </Button>
          </form>
        </div>
      </Form>
    );
  };

  export default AccountGeneral;