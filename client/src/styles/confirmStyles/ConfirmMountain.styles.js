import styled from 'styled-components';

export const ConfirmModal = styled.form`
  width: 70%;
  height: auto;
  padding: 20px;
  background: #C6E6FB;
  display: grid;
  grid-template-columns: 20px 1fr 1fr 20px;
  grid-template-rows: 20px 4fr 1fr;
  grid-template-areas:
    ". . . close"
    "radio radio conditions condtions"
    "button button button button";
  justify-content: space-between;
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
`;

export const ConfirmList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-area: radio;
`;

export const ConfirmButton = styled.button`
  grid-area: button;
  justify-self: center;
  background-color: #448ee4;
  border: 2px solid #003153;
  border-radius: 4px;
  font-family: 'Audiowide', cursive;
  color: #003153;
}
`;

export const ProcessingWarning = styled.section`
  position: absolute;
  text-align: center;
  color: green;
  width: 100%;
`;
