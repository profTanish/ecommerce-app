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