import letters from "../modules/letters";
import member from "../modules/member";
import { configureStore } from "@reduxjs/toolkit";
import auth from "../modules/auth";
const store = configureStore({
  reducer: {
    letters: letters,
    member: member,
    auth: auth,
  },
});

export default store;
