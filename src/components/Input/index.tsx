import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

import { Container, Error } from "./styles";

// interface Ierror {
//   message: string;
// }

interface InputProps {
  id: string;
  label: string;
  type: string;
  error?: FieldError;
  placeholder: string;
}

// interface Iref {
//   ref: React.LegacyRef<HTMLInputElement>;
// }

const Input = forwardRef(
  (
    { id, label, error, type, placeholder, ...register }: InputProps,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <>
      <label htmlFor={id}>{label}</label>
      <Container>
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          ref={ref}
        />

        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error.message}</span>
          </Error>
        )}
      </Container>
    </>
  )
);

export default Input;
