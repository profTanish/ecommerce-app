import { useEffect } from "react";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
    HiOutlineUser,
} from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { useGetOrderById } from "./useGetOrderById";
import { getEstimatedDeliveryDate } from "@/lib/helpers";
import { useGetCustomer } from "../customer/useGetCustomer";
import { useUser } from "../authentication/useUser";
import { Link, useNavigate } from "react-router-dom";
import FullPageSpinner from "@/components/FullPageSpinner";

const Order = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { order, isLoading: isLoadingOrder } = useGetOrderById();
    const { customer, isLoading: isLoadingCustomer } = useGetCustomer(
        user ? user.email : ""
    );

    const isLoading = isLoadingCustomer || isLoadingOrder;

    useEffect(() => {
        if (customer && order && customer.id !== order.customerId) {
            navigate("/404", { replace: true });
        }
    }, [customer, order, history]);

    if (isLoading) return <FullPageSpinner />;
    if (!order || !customer)
        return <div className="py-5">No order/customer could be found.</div>;

    const { fullName, email, address } = customer;

    const {
        created_at,
        status,
        id,
        products,
        totalAmount,
        totalProducts,
        totalQuantity,
    } = order;

    const estimatedDeliveryDate = getEstimatedDeliveryDate(created_at);

    return (
        <div className="max-w-container mx-auto py-16">
            <div className="flex items-center gap-8 mb-5">
                <h3 className="text-3xl font-bold text-darkSlate">Order ID: #{id}</h3>
                <p className="text-red-600 px-2.5 py-1 bg-red-200 inline rounded-md">
                    {status}
                </p>
            </div>

            <div className="flex justify-between">
                <div className="basis-1/2">
                    <h3 className="heading-tertiary">Order Item</h3>
                    <ul className="max-h-96 overflow-scroll mb-5 pr-5">
                        {(products as CartProduct[])?.map((item) => (
                            <li
                                key={item.productId}
                                className="flex gap-16 justify-between items-center py-5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightGray"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-[5] h-[5rem] rounded-md overflow-hidden">
                                        <img
                                            className="w-full h-full"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>
                                    <p className="font-bold">{item.quantity}x</p>
                                    <p>{item.name}</p>
                                </div>

                                <p className="font-bold">${item.price}</p>
                            </li>
                        ))}
                    </ul>

                    <Button asChild>
                        <Link to="/store">Continue Shopping</Link>
                    </Button>

                    <div className="mt-5 bg-lightGray p-5 rounded-md">
                        Estimated delivery:{" "}
                        <span className="font-bold">{estimatedDeliveryDate}</span>
                    </div>
                </div>

                <div className="basis-1/2 space-y-5 max-w-sm">
                    <div className="p-5 border-2 border-darkGray rounded-md">
                        <h3 className="heading-tertiary mb-5">Address & Contact</h3>
                        <ul className="text-textGray flex flex-col gap-2.5">
                            <li className="flex items-center gap-2.5">
                                <HiOutlineUser className="text-xl" />
                                {fullName ?? "N/A"}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <HiOutlineMapPin className="text-xl" />
                                {address?.street ?? "N/A"}, {address?.city ?? "N/A"}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <HiOutlineEnvelope className="text-xl" />
                                {email ?? "N/A"}
                            </li>
                            <li className="flex items-center gap-2.5">
                                <HiOutlinePhone className="text-xl" />
                                {address?.phone ?? "Test"}
                            </li>
                        </ul>
                    </div>

                    <div className="p-5 border-2 border-darkGray rounded-md">
                        <h3 className="heading-tertiary mb-5">Order Summary</h3>
                        <ul className="text-textGray flex flex-col gap-2.5">
                            <li className="flex items-center justify-between gap-2.5">
                                <p>Total products</p>
                                <p>{totalProducts}</p>
                            </li>
                            <li className="flex items-center justify-between gap-2.5">
                                <p>{totalQuantity}</p>
                                <p>5</p>
                            </li>
                            <li className="flex items-center justify-between gap-2.5 text-darkSlate font-bold">
                                <p>Total amount</p>
                                <p>${totalAmount}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;