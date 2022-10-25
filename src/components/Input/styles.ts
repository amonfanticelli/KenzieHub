import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  input {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;

    background-color: var(--color-grey-2);
    border: 1.2182px solid #343b41;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }
  svg {
    position: absolute;
    color: red;
    right: 30%;

    color: #f10;
    width: 20px;
    height: 20px;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;
  &:hover span {
    opacity: 1;
  }
  span {
    width: 155px;
    position: absolute;
    background-color: #f10;
    padding: 4px 15px;
    border-radius: 3px;
    left: 25px;
    top: -1px;
    opacity: 0;
    transition: opacity 0.4s;
    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: #f10 transparent;
      position: absolute;
      top: 4px;
      left: -7px;
    }
  }
`;
