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
function Join() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const { id, password, nickname } = formState;
  const joinHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <StyledPage>
      <StyledLoginUi>
        <StyledTitle>회원가입</StyledTitle>
        <StyledInputs>
          <StyledInput
            name="id"
            value={id}
            onChange={joinHandler}
            placeholder="아이디(4~10글자)"
            minLength={4}
            maxLength={10}
          ></StyledInput>
          <StyledInput
            name="password"
            value={password}
            onChange={joinHandler}
            placeholder="비밀번호(4~15글자)"
            minLength={4}
            maxLength={15}
          ></StyledInput>
          <StyledInput
            name="nickname"
            value={nickname}
            onChange={joinHandler}
            placeholder="닉네임(1~9글자)"
            minLength={1}
            maxLength={9}
          ></StyledInput>
        </StyledInputs>
        <StyledButtons>
          <StyledBtn>회원가입</StyledBtn>
          <StyledP onClick={() => navigate("/login")}>로그인</StyledP>
        </StyledButtons>
      </StyledLoginUi>
    </StyledPage>
  );
}

export default Join;
