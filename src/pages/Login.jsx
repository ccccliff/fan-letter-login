import React, { useState } from "react";
import {
  StyledLoginUi,
  StyledPage,
  StyledTitle,
  StyledInputs,
  StyledButtons,
} from "../components/common/StyledUi";
import {
  StyledBtn,
  StyledInput,
  StyledP,
} from "../components/common/StyledElements";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/modules/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginFormState, setLoginFormState] = useState({
    id: "",
    password: "",
  });
  const { id, password } = loginFormState;
  const loginHandler = (event) => {
    const { name, value } = event.target;
    setLoginFormState((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(isLogin());
    console.log("로그인성공");
  };
  return (
    <StyledPage>
      <StyledLoginUi onSubmit={onSubmitHandler}>
        <StyledTitle>로그인</StyledTitle>
        <StyledInputs>
          <StyledInput
            name="id"
            value={id}
            onChange={loginHandler}
            placeholder="아이디(4~10글자)"
            minLength={4}
            maxLength={10}
          ></StyledInput>
          <StyledInput
            name="password"
            value={password}
            onChange={loginHandler}
            placeholder="비밀번호(4~15글자)"
            minLength={4}
            maxLength={15}
          ></StyledInput>
        </StyledInputs>
        <StyledButtons>
          <StyledBtn>로그인</StyledBtn>
          <StyledP onClick={() => navigate("/join")}>회원가입</StyledP>
        </StyledButtons>
      </StyledLoginUi>
    </StyledPage>
  );
}

export default Login;
