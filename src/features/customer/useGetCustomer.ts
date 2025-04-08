import { getCustomerByEmail } from "@/services/apiCustomer";
import { useQuery } from "@tanstack/react-query";

export function useGetCustomer(customerEmail?: string) {
    const { data: customer, isLoading } = useQuery<Customer | null, Error>({
        queryKey: ["customer", customerEmail],
        queryFn: () => getCustomerByEmail(customerEmail),
        enabled: !!customerEmail,
    });

    return { customer, isLoading };
}