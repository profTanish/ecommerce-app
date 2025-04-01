import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    cart: {
        productId: number;
        name: string;
        category: string;
        price: number;
        image: string;
        totalPrice: number;
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
        deleteFromCart: (state, action) => { },
        increaseQty: (state, action) => { },
        decreaseQty: (state, action) => { },
        clearCart: (state, action) => { },
    },
});