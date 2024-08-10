import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// dksjhfkjsdhkj@gmail.com
// dksjhf21kjsdhkj@gmail.com
// 123123123

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", user);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
});

export const logOut = createAsyncThunk("auth/refresh", async () => {});
