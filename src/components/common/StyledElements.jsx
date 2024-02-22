import styled from "styled-components";

export const StyledBtn = styled.button`
  border: 1px solid white;
  border-radius: 10px;
  background-color: gray;
  width: 200px;
  height: 50px;
  color: white;
  font-size: 30px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledInput = styled.input`
  width: 760px;
  height: 50px;
  margin: 20px auto 20px auto;
  border: 1px solid transparent;
  border-bottom: 2px solid lightgray;
`;
export const StyledP = styled.p`
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
