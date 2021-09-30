// import * as actionTypes from "./shopping-types";
const ADD_TO_CART = "ADD_TO_CART";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};



export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
