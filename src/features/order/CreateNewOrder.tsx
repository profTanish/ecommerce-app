import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

import {
    getCart,
    getTotalCartPrice,
    getTotalCartProducts,
    getTotalCartQuantity,
} from "../cart/cartSlice";

import { useUser } from "../authentication/useUser";
import { useCreateOrder } from "./useCreateOrder";
import { useGetCustomer } from "../customer/useGetCustomer";
import { useCreateCustomer } from "../customer/useCreateCustomer";

import OrderSummary from "./OrderSummary";
import AddressInfo from "./AddressInfo";

const CreateNewOrder = () => {
    const navigate = useNavigate();
    const { createOrder, isCreatingOrder } = useCreateOrder();
    const { customer } = useGetCustomer(user?.email);
    const { createNewCustomer, isCreatingCustomer } = useCreateCustomer();

    const totalCartPrice = useSelector(getTotalCartPrice);
    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const totalCartProducts = useSelector(getTotalCartProducts);

    if (!user || !cart.length) return <Navigate to="/cart" replace />;

    const { address, name, email } = user?.user_metadata;

    function handleCreateOrder() {
        const newOrder = {
            status: "undelivered",
            totalAmount: totalCartPrice,
            totalProducts: totalCartProducts,
            totalQuantity: totalCartQuantity,
            products: cart,
        };

        if (!customer) {
            createNewCustomer(
                { fullName: name, email, address },
                {
                    onSuccess: (newCustomer) => {
                        createOrder(
                            { ...newOrder, customerId: newCustomer.id },
                            {
                                onSuccess: (createdOrder) => {
                                    navigate(`/order/${createdOrder.id}`);
                                },
                            }
                        );
                    },
                }
            );
        } else {
            createOrder(
                { ...newOrder, customerId: customer.id },
                {
                    onSuccess: (createdOrder) => {
                        navigate(`/order/${createdOrder.id}`);
                    },
                }
            );
        }
    }

    return (
        <div className="max-w-container mx-auto py-16">
            <h2 className="heading-secondary mb-5">Confirm your order</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <OrderSummary />
                <AddressInfo address={address} name={name} email={email} />
            </div>
            <Button
                disabled={isCreatingOrder || isCreatingCustomer}
                onClick={handleCreateOrder}
            >
                Order Now
            </Button>
        </div>
    );
};

export default CreateNewOrder;