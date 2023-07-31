import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../Features/articleSlice"
import categoriesReducer from "../Features/categorieSlice"
import scategoriesReducer from "../Features/scategorieSlice"
import cartSliceReducer from "../Features/carteSlice"
import authReducer from "../Features/AuthSlice"


const store = configureStore({
reducer: {
storearticles:articlesReducer,
storecategories:categoriesReducer,
storescategories:scategoriesReducer,
storecart:cartSliceReducer,
auth:authReducer,

}
})
export default store