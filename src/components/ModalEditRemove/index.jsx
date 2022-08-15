import { Container, Form } from "./style";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useEffect } from "react";

const ModalEditRemove = ({ setModalEdit, currentObject }) => {
  useEffect(() => {}, [currentObject]);

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

  const { handlePostTech, handleRemoveTech } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Editar Tecnologia</h1>{" "}
          <button onClick={() => setModalEdit(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form>
          <label htmlFor="title">Nome</label>
          <input
            placeholder={
              currentObject === null || currentObject === undefined
                ? "Tecnologia"
                : currentObject.title
            }
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
          <button
            onClick={(event) => {
              event.preventDefault();
              handlePostTech(currentObject.id);
            }}
          >
            Editar Tecnologia
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              handleRemoveTech(currentObject);
            }}
          >
            Remover Tecnologia
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default ModalEditRemove;
