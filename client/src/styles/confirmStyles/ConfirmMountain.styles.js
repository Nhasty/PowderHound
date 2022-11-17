import styled from 'styled-components';

export const ConfirmModal = styled.form`
  box-sizing: border-box;
  width: 70%;
  height: auto;
  padding: 20px;
  background: #C6E6FB;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  position: fixed
`;

export const DarkOut = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background: rgba(0, 0, 0, 0.5);
z-index: 40;
`;
