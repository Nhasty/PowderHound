import styled from 'styled-components';

export const StyledMain = styled.main`
  color: #003153;
  height: 100vh;
  display: flex;
  flex-direction: column;
  --arrow-color: red;
`;
export const StyledH1 = styled.h1`
  font-size: 60px;
  box-sizing: border-box;
  margin: 0;
  text-align: center;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 100;
`;

export const SignOut = styled.button`
  border: none;
  background-color: #C6E6FB;

    &:hover{
      color: #F5CA7B
    }
`;
