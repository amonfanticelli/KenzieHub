import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--color-grey-4);
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 4rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    color: var(--color-primary);
  }

  button {
    line-height: 38px;
    padding: 0px 16.2426px;
    color: var(--color-grey-0);
    background: var(--color-grey-3);
    border-radius: 4px;
  }
`;

export const Line = styled.div`
  background-color: var(--color-grey-3);
  width: 100%;
  height: 1px;
`;

export const Section = styled.section`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    padding-left: 90px;

    font-style: normal;
    line-height: 1.75rem;
    font-weight: 700;
    font-size: 1.7rem;
    color: var(--color-grey-0);
  }
  span {
    display: flex;
    padding-right: 100px;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: var(--color-grey-1);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 80%;
  div {
    width: 100%;
    height: 100%;

    h1 {
      width: 65%;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: var(--color-grey-0);
    }
    span {
      margin-top: 1rem;
      width: 74.9%;
      display: flex;
      justify-content: center;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #ffffff;
    }
  }
`;
