import styled from "styled-components";

export const LoadContainer = styled.div `
  background-color: #4e4e8a;
  height: 100vh;
  width: 100vw;
  margin-top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  div {
    backgound-color: white;
    height: 10em
  }
`;

export const frame = KeyFrames `
  0% {
    height: 10em;
  }

  50% {
    height: 5em;
  }

  100% {
    height: 10em
  }
`;