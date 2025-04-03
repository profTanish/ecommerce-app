import { RootState } from "@/store";
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
    cart: [],
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

            if (product.quantity === 0)
                cartSlice.caseReducers.deleteFromCart(state, action);
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

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartPrice = (state: RootState) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCartQuantity = (state: RootState) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
    state.cart.cart.find((item) => item.productId === id)?.quantity ?? 0;