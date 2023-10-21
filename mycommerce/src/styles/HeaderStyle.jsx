import styled from "styled-components";

export const HeaderArea = styled.header`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #4e4e8a;
  padding: 20px;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: white;

    &: hover {
      text-decoration: underline
    }
  }
`;