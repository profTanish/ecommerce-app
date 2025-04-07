type OrderSummaryProps = {
    cart: {
        productId: number;
        name: string;
        category: string;
        price: number;
        image: string;
        totalPrice: number;
        quantity: number;
    }[];
};

const OrderSummary = ({ cart }: OrderSummaryProps) => {
    return (
        <div>
            <h3 className="heading-tertiary">Order</h3>
            <div className="text-textGray flex gap-5">
                {cart.map((item) => (
                    <div key={item.productId}>
                        <p>{item.category}</p>
                        <p>{item.name}</p>
                        <p>Qty: {item.quantity}</p>
                        <p>${item.price}</p>
                        <p>Total: ${item.totalPrice}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderSummary;