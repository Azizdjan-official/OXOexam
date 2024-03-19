import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import wishlist, { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, addCount } from './reducer/Wishlist';

const middleWare = createListenerMiddleware()

export const store = configureStore({
    reducer:{
        wishlist,
        
    },
    middleware:(middleware)=> middleware().prepend(middleWare.middleware)
})

middleWare.startListening({
    matcher:isAnyOf(ADD_TO_WISHLIST,REMOVE_TO_WISHLIST),
    effect:(_,ref) => {
        ref.dispatch(addCount())
    }
})