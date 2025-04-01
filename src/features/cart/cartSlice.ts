import { createSlice } from "@reduxjs/toolkit";

type CartState = {
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

const initialState: CartState = {
    //   cart: [],

    cart: [
        {
            productId: 12,
            name: "Black T-Shirt",
            category: "Clothes",
            price: 44.29,
            image:
                "https://akyztpchcdqpamqgattl.supabase.co/storage/v1/object/public/product-images/black-tshirt.jpeg",
            totalPrice: 44.29,
            quantity: 1,
        },
    ],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (product) => product.productId !== action.payload
            );
        },
        increaseQty: (state, action) => {
            const product = state.cart.find(
                (product) => product.productId === action.payload
            );
            if (!product) return;

            product.quantity++;
            product.totalPrice = product.price * product.quantity;
        },
        decreaseQty: (state, action) => {
            const product = state.cart.find(
                (product) => product.productId === action.payload
            );
            if (!product) return;

            product.quantity--;
            product.totalPrice = product.price * product.quantity;
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const {
    addToCart,
    deleteFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;