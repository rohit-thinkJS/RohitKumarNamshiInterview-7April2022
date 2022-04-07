import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";

//Save state to storage, to save the details even after refreshing the browsing
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (e) {
        console.error(e);
    }
}

//Load details from local storage and show in redux
function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

const preloadedState = loadFromLocalStorage();

const store = createStore(
    rootReducer,
    preloadedState,
    compose(
        applyMiddleware(thunk),
        //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    )
);


// store = createStore(
//     rootReducer,
//     preloadedState,
//     compose(
//         applyMiddleware(thunk),
//         //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
//     )
// );

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
