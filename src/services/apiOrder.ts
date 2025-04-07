import supabase from "./supabase";

type createNewOrderProps = {
    customerId: number;
    products: product[];
    totalProducts: number;
    totalQuantity: number;
    totalAmount: number;
    status: string;
};

export async function createNewOrder(newOrder: createNewOrderProps) {
    const { data, error } = await supabase
        .from("orders")
        .insert([newOrder])
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error("New customer could not be created");
    }

    return data;
}