import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(18, 18, 20, 0.5);

  position: fixed;

  div {
    min-width: 300px;
    width: 20%;

    background: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    .containerTitleButton {
      width: 100%;

      display: flex;
      justify-content: space-between;
      padding: 12px 20px;
      align-items: center;
      height: 50px;
      background-color: var(--color-grey-2);
      .titleTecnology {
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;

        color: var(--color-grey-0);
      }
      .crossButton {
        background-color: transparent;
        color: var(--color-grey-1);
      }
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
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
    color: white;

    background-color: var(--color-grey-2);
    border: 1.2182px solid #343b41;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
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

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;

    .buttonSave {
      width: 60%;
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

    .buttonRemove {
      width: 30%;
      height: 2.8rem;
      min-height: 1.5rem;

      background: var(--color-grey-1);
      color: var(--color-grey-0);
      border: 1.2182px solid var(--color-grey-1);
      border-radius: 4px;
      &:hover {
        border: var(--color-grey-4);
        background-color: var(--color-grey-4);
        transition: 0.8s;
      }
    }
  }
`;
