import { updateUser as updateUserApi } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, isPending: isUpdating } = useMutation({
        mutationFn: updateUserApi,
        onSuccess: ({ user }) => {
            toast.success("User account successfully updated");
            queryClient.setQueryData(["user"], user);
        },
        onError: (err) => toast.error(err.message),
    });

    return { updateUser, isUpdating };
}