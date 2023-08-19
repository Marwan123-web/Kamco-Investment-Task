import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../localStorage/LocalStorage";
import { cartReducers } from "./reducer";

const cartinitialState =
    localStorageMethods.getItem("cart") !== null && localStorageMethods.getItem("cart") !== undefined
        ? localStorageMethods.getItem("cart")
        : localStorageMethods.addIetm("cart", [
              {
                  id: "10",
                  firstName: "Marwan",
                  lastName: "Salman",
                  email: "marawansalman98@gmail.com",
                  mobile: "01009350660",
                  account: "Account# 234551",
                  title: "eng",
                  gender: "male",
                  status: false,
                  lastLogin: "July 01, 2021 - 01:46 AM",
              },
              {
                  id: "10",
                  firstName: "Hisham",
                  lastName: "Salman",
                  email: "marawansalman98@gmail.com",
                  mobile: "01009350660",
                  account: "Account# 234551",
                  title: "eng",
                  gender: "male",
                  status: false,
                  lastLogin: "July 01, 2021 - 01:46 AM",
              },
              {
                  id: "10",
                  firstName: "Mohamed",
                  lastName: "Salman",
                  email: "marawansalman98@gmail.com",
                  mobile: "01009350660",
                  account: "Account# 234551",
                  title: "eng",
                  gender: "male",
                  status: false,
                  lastLogin: "July 01, 2021 - 01:46 AM",
              },
          ]);

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: cartinitialState || [],
    },
    reducers: cartReducers,
});

export const { addItem, editItem, deleteItem, calcTotal } = cartSlice.actions;
export default cartSlice.reducer;
