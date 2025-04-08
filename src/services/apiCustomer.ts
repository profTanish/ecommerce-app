import { parseAddress } from "@/lib/helpers";
import supabase from "./supabase";

type createCustomerProps = {
    fullName: string;
    email: string;
    address: {
        phone: string;
        city: string;
        street: string;
    };
};

export async function createCustomer(newCustomer: createCustomerProps) {
    const { data, error } = await supabase
        .from("customers")
        .insert([newCustomer])
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("New customer could not be created");
    }

    return data;
}

export async function getCustomerByEmail(
    customerEmail?: string
): Promise<Customer | null> {
    if (!customerEmail) return null;

    const { data, error } = await supabase
        .from("customers")
        .select("*")
        .eq("email", customerEmail)
        .single();

    if (error) {
        throw new Error("Customer not found");
    }

    return {
        ...data,
        address: parseAddress(data.address),
    };
}