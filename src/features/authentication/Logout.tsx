import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import Spinner from "@/components/Spinner";

const Logout = () => {
    const { logout, isPending } = useLogout();

    return (
        <button
            className="flex items-center gap-2.5 p-2.5 hover:text-red-600"
            disabled={isPending}
            onClick={() => logout()}
        >
            {!isPending ? (
                <>
                    <HiArrowRightOnRectangle className="text-xl" /> Logout
                </>
            ) : (
                <Spinner />
            )}
        </button>
    );
};

export default Logout;