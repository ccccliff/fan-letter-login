import React from "react";
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
function Login() {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <StyledLoginUi>
        <StyledTitle>회원가입</StyledTitle>
        <StyledInputs>
          <StyledInput placeholder="아이디(4~10글자)"></StyledInput>
          <StyledInput placeholder="비밀번호(4~15글자)"></StyledInput>
          <StyledInput placeholder="닉네임(1~9글자)"></StyledInput>
        </StyledInputs>
        <StyledButtons>
          <StyledBtn>회원가입</StyledBtn>
          <StyledP onClick={() => navigate("/login")}>로그인</StyledP>
        </StyledButtons>
      </StyledLoginUi>
    </StyledPage>
  );
}

export default Login;
