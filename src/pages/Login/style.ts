import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--color-grey-4);

  h1 {
    margin-top: 2rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    color: var(--color-primary);
  }
`;

export const LoginForm = styled.form`
  position: relative;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 20%;
  height: 70%;
  min-height: 500px;
  max-height: 550px;

  background-color: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    margin-bottom: 2rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--color-grey-0);
  }

  label {
    width: 90%;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-0);
  }
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

  .passwordIconShow {
    position: absolute;
    right: 10%;
    bottom: 52%;
  }

  .login {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;

    background: var(--color-primary-negative);
    color: var(--color-grey-0);
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    margin-bottom: 2.125rem;

    &:hover {
      background-color: var(--color-primary);
      transition: 0.8s;
    }
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: var(--color-grey-1);
  }
  .registerButton {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-0);

    background: var(--color-grey-1);

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    &:hover {
      transition: 0.8s;
      background: var(--color-grey-4);
    }
  }
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;
