import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./reducers/filmSlice";
import productionHouseReducer from "./reducers/productionHouse";

export const store = configureStore({
  reducer: {
    films: filmReducer,
    productionHouses: productionHouseReducer,
  },
});
