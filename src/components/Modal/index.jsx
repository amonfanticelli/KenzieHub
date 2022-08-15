import { Container, Form } from "./style";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Modal = ({ setModal }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { handlePostTech } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Cadastrar Tecnologia</h1>{" "}
          <button onClick={() => setModal(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handlePostTech)}>
          <label htmlFor="title">Nome</label>
          <input
            placeholder="Tecnologia"
            id="title"
            type="text"
            {...register("title")}
          />
          <span>{errors.title?.message}</span>
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")} id="status">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </Form>
      </div>
    </Container>
  );
};

export default Modal;
