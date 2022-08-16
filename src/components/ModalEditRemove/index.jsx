import { Container, Form } from "./style";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";

const ModalEditRemove = ({ setModalEdit, currentObject }) => {
  const [title, setTitle] = useState(currentObject.title);
  const [status, setStatus] = useState("");

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

  const handleEditTech = (data) => {
    // const techEdit = {
    //   title: title,
    //   status: status,
    // };
    console.log(data);
    const token = localStorage.getItem("@token");
    api
      .put(`/users/techs/${currentObject.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.warn(err));
  };

  const { handleRemoveTech } = useContext(UserContext);
  return (
    <Container>
      <div>
        <div className="containerTitleButton">
          <h1 className="titleTecnology">Editar Tecnologia</h1>{" "}
          <button onClick={() => setModalEdit(false)} className="crossButton">
            <ImCross />
          </button>
        </div>

        <Form onSubmit={handleSubmit(handleEditTech)}>
          <label htmlFor="title">Nome</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
          <select
            onChange={(event) => setStatus(event.target.value)}
            {...register("status")}
            id="status"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button
          // onClick={(event) => {
          //   event.preventDefault();
          //   handleEditTech(currentObject.id, title, status);
          // }}
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
