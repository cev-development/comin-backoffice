import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 90%;
  flex-wrap: wrap;
  /* padding: 30px 25px; */
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Title = styled.div`
  font-family: poppins;
  font-size: 2rem;
  font-weight: 500;
  color: #323232;
`;

export const Button = styled.button`
  width: 20%;
  height: 10%;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #84ae8a;
  margin-top: 25px;
  border: none;
  padding: 15px 10px;
  color: #fff;
  font-family: poppins;
  font-weight: 500;
  transition: 0.5s;

  :hover {
    background-color: #9cbfa1;
  }
`;
