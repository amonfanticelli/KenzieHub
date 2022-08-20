import { Container, Form } from "./style";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { UserContext, Tech, TechEdit } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface PropsModalEdit {
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  currentObject: Tech;
}

const ModalEditRemove = ({ setModalEdit, currentObject }: PropsModalEdit) => {
  const formSchema = yup.object().shape({
    status: yup.string(),
  });

  const { register, handleSubmit } = useForm<TechEdit>({
    resolver: yupResolver(formSchema),
  });

  // const handleEditTech = (data: Tech) => {
  //   // const techEdit = {
  //   //   title: title,
  //   //   status: status,
  //   // };
  //   console.log(data);
  //   const token = localStorage.getItem("@token");
  //   api
  //     .put(`/users/techs/${currentObject.id}`, data, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => console.warn(err));
  // };

  const { handleRemoveTech, handleEditTech } = useContext(UserContext);
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
            value={currentObject.title}
            placeholder={
              currentObject === null || currentObject === undefined
                ? "Tecnologia"
                : currentObject.title
            }
            id="title"
            type="text"
          />

          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")} id="status">
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
