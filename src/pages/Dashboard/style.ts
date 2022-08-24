import styled from "styled-components";

export const Container = styled.div`
  height: 84vh;

  background-color: var(--color-grey-4);
`;

export const HeaderContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    &:hover {
      background-color: var(--color-primary);

      transition: 0.5s;
    }
  }
`;

export const Line = styled.div`
  background-color: var(--color-grey-3);
  width: 100%;
  height: 1px;
`;

export const SectionContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-style: normal;
    line-height: 1.75rem;
    font-weight: 700;
    font-size: 1.7rem;
    color: var(--color-grey-0);
  }
  span {
    display: flex;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: var(--color-grey-1);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 70%;
    display: flex;
    justify-content: space-between;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: var(--color-grey-0);
    }
    button {
      line-height: 38px;
      padding: 0px 16.2426px;
      color: var(--color-grey-0);
      background: var(--color-grey-3);
      border-radius: 4px;
      &:hover {
        background-color: var(--color-grey-0);
        color: var(--color-grey-3);
        transition: 0.5s;
      }
    }
  }

  ul {
    width: 70%;

    background: var(--color-grey-3);
    border-radius: 4px;
    padding: 22px 19px;
    gap: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    li {
      width: 100%;
      height: 3.046rem;
      background: var(--color-grey-4);
      border-radius: 4.06066px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.375rem;
        color: #ffffff;
      }
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 12.182px;
        line-height: 22px;
        margin-right: 1.5rem;
        color: var(--color-grey-0);
      }
      button {
        color: var(--color-grey-0);
        background-color: transparent;
        svg {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;
