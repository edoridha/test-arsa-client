import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url_api = "http://localhost:8080/api/";

export const fetchFilms = createAsyncThunk("films/fetchFilms", async () => {
  const response = await axios.get(`${url_api}film`);
  return response.data;
});

export const fetchFilmById = createAsyncThunk(
  "films/fetchFilmById",
  async (id) => {
    const response = await axios.get(`${url_api}film/${id}`);
    return response.data;
  }
);

export const addFilm = createAsyncThunk("films/addFilm", async (film) => {
  const response = await axios.post(`${url_api}film`, film);
  return response.data;
});

export const fetchProductionHouses = createAsyncThunk(
  "productionHouses/fetchProductionHouses",
  async () => {
    try {
        const response = await axios.get(`${url_api}production-house`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
  }
);

export const fetchProductionHouseById = createAsyncThunk(
  "productionHouses/fetchProductionHouseById",
  async (id) => {
    const response = await axios.get(`${url_api}production-house/${id}`);
    
    return response.data;
  }
);
