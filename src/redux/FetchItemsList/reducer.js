import { ADD_TO_CART, EMPTY_CART, FETCH_CATEGORIES, FETCH_ITEMS, REMOVE_FROM_CART } from "./types"

const initState = {
    itemsList: [],
    cartList: [],
    categoriesList: []
}

const fetchItemsListReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                itemsList: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartList: state.cartList?.length ? [...state.cartList, action.payload] : [action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartList: state.cartList.filter(item => item.id !== action.payload.id)
            }
        case EMPTY_CART:
            return {
                ...state,
                cartList: []
            }
        case FETCH_CATEGORIES:
            return {
                ...state,
                categoriesList: [...action.payload]
            }


        default:
            return state
    }
}

export default fetchItemsListReducer
