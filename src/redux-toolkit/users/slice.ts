import { createSlice } from "@reduxjs/toolkit";
import { localStorageMethods } from "../../localStorage/LocalStorage";
import { usersReducers } from "./reducer";

const usersinitialState =
    localStorageMethods.getItem("users") !== null && localStorageMethods.getItem("users") !== undefined
        ? localStorageMethods.getItem("users")
        : localStorageMethods.addIetm("users", [
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

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        items: usersinitialState || [],
    },
    reducers: usersReducers,
});

export const { addItem, editItem, deleteItem, calcTotal } = usersSlice.actions;
export default usersSlice.reducer;
