import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b1e7fb;
  padding: 15px 0px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  height: min-content;
`;

export const Button = styled.button`
  padding: 20px 30px;
  color: #323232;
  font-family: poppins;
  font-weight: 600;
  border: none;
  background: transparent;
  cursor: pointer;
  & + & {
    border-left: 0.5px solid rgba(0, 0, 0, 0.3);
  }
  :hover {
    color: #fff;
  }
`;
