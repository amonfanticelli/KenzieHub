import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--color-grey-4);
`;

export const ContainerTitle = styled.div`
  width: 20%;

  display: flex;
  justify-content: space-between;

  margin-top: 3rem;
  margin-bottom: 3rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    color: var(--color-primary);
  }

  .returnButton {
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.75rem;
    text-align: center;
    width: 15%;
    height: 100%;
    color: var(--color-grey-0);
    background-color: var(--color-grey-3);
    border-radius: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      background-color: var(--color-grey-0);
      color: var(--color-grey-3);
      transition: 0.5s;
    }
  }
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: 20%;
  padding: 10px 0px;

  background-color: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    margin-top: 3rem;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-grey-0);
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  span {
  }

  button {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;

    background: var(--color-primary-negative);
    color: var(--color-grey-0);
    border: 1.2182px solid #59323f;
    border-radius: 4px;

    &:hover {
      background-color: var(--color-primary);
      transition: 0.8s;
    }
  }
  select {
    width: 90%;
    height: 2.8rem;
    min-height: 1.5rem;
    padding-left: 1rem;

    color: var(--color-grey-1);
    background-color: var(--color-grey-2);
    border: 1.2182px solid #343b41;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
  }
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;
