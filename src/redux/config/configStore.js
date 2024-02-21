import letters from "../modules/letters";
import member from "../modules/member";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    letters: letters,
    member: member,
  },
});

export default store;
