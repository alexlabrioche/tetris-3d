import styled, { css } from "styled-components";

export const BoardWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled("h1")`
  color: #234;
  font-size: 20vh;
  position: absolute;
  left: -40vh;
  padding: 0;
  margin: 0;
  transform: rotate(90deg);
`;
export const BoardGrid = styled("div")`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 2.5rem)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 2.5rem)`};
  border: 5px solid #012;
  border-radius: 5px;
`;

export const Pixel = styled("span")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isOn }) =>
    isOn &&
    css`
      background-color: #234;
    `}
`;
