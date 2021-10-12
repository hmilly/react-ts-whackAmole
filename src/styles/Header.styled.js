import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 3fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-auto-flow: row;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  p {
    font-size: 20px;
    margin: 0;
  }
  button {
    height: auto;
    border: solid 1px red;
    padding: 2px 20px;
    border: solid 3px blue;
    background-color: white;
    color: ${({ btnCol }) => btnCol};
    font-size: 18px;
  }
  button:hover {
    transition: padding 0.1s;
    padding: 4px 24px;
    cursor: pointer;
  }
  button:active {
    border: solid 3px black;
    color: black;
    padding: 0 18px;
    background-color: lightyellow;
  }
  div {
    width: 50%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-auto-flow: row;
    align-items: center;
    p :nth-child(even) {
      font-size: 24px;
      font-weight: 700;
      justify-self: start;
      color: blue;
    }
  }
`;
