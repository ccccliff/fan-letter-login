import { createSlice } from "@reduxjs/toolkit";

// const SET_MEMBER = "member/SET_MEMBER";

// export const setMember = (payload) => {
//   return { type: SET_MEMBER, payload };
// };

// const member = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MEMBER:
//       const activeMember = action.payload;
//       return activeMember;
//     default:
//       return state;
//   }
// };

// export default member;

const initialState = "카리나";

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    // state를 직접사용하지 않아도 형식유지를 위해서 state, action은 지켜야된다!
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const { setMember } = membersSlice.actions;
export default membersSlice.reducer;
