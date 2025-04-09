import OrderItems from "./OrderItems";

const OrderSummary = () => {
    return (
        <div>
            <h3 className="heading-tertiary">Order</h3>
            <OrderItems />
        </div>
    );
};

export default OrderSummary;