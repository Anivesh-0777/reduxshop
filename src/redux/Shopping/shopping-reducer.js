// import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      "id":1,
      "bot":"Hot Bot",
      "description":"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index-value":289.34,
      "cagr":34
   },
   {
      "id":2,
      "bot":"Cool Bot",
      "description":"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index-value":439.34,
      "cagr":28
   },
   {
      "id":3,
      "bot":"Options Bot",
      "description":"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index-value":139.34,
      "cagr":42
   }

  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
   
    case "LOAD_CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
