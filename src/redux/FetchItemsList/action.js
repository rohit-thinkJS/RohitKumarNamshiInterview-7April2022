import { ADD_TO_CART, FETCH_ITEMS, REMOVE_FROM_CART, EMPTY_CART, FETCH_CATEGORIES } from "./types";

export const fetchItemsList = () => dispatch => {
    fetch('https://fakestoreapi.com/products?limit=10')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_ITEMS,
                payload: res
            })
        })
};

export const fetchCategoriesList = () => dispatch => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: res
            })
        })
};


export const addToCart = (item) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}

export const removeFromCart = (item) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: item
    })
}

export const emptyCart = () => dispatch => {
    dispatch({
        type: EMPTY_CART
    })
}