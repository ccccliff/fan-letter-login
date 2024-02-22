import { useNavigate } from "react-router";
import styled from "styled-components";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <StyledLayout>
      <StyledpBtn onClick={() => navigate("/")}>Home</StyledpBtn>
      <StyledUserImfo>
        <StyledpBtn onClick={() => navigate("/profile")}>내 프로필</StyledpBtn>
        <StyledpBtn>로그아웃</StyledpBtn>
      </StyledUserImfo>
    </StyledLayout>
  );
}

const StyledLayout = styled.header`
  width: 100%;
  height: 40px;
  background-color: gray;
  color: black;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const StyledUserImfo = styled.div`
  width: 200px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const StyledpBtn = styled.p`
  height: 15px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
