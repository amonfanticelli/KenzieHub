import { forwardRef } from "react";
import { BiErrorCircle } from "react-icons/bi";

import { Container, Error } from "./styles";

const Input = forwardRef(({ id, label, error, ...register }, ref) => (
  <>
    <label htmlFor={id}>{label}</label>
    <Container>
      <input id={id} type="text" {...register} ref={ref} />

      {error?.message && (
        <Error>
          <BiErrorCircle />
          <span>{error.message}</span>
        </Error>
      )}
    </Container>
  </>
));

export default Input;
