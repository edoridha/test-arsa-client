import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductionHouses,
  fetchProductionHouseById,
} from "../actions/index";

const productionHouseSlice = createSlice({
  name: "productionHouses",
  initialState: {
    productionHouses: [],
    productionHouse: null,
    loading: true,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductionHouses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductionHouses.fulfilled, (state, action) => {
        state.loading = false;
        state.productionHouses = action.payload;
      })
      .addCase(fetchProductionHouses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductionHouseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductionHouseById.fulfilled, (state, action) => {
        state.loading = false;
        state.productionHouse = action.payload;
        console.log(action.payload, "<<<<dari slice");
        
      })
      .addCase(fetchProductionHouseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLoading, setError } = productionHouseSlice.actions;
export default productionHouseSlice.reducer;
