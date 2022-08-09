import { RegisterForm, Container, ContainerTitle } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input";

const Singup = () => {
  const accountCreated = () =>
    toast.success("Conta criada com sucesso!", { autoClose: 1000 });

  const accountError = () =>
    toast.error("Ops! Algo deu errado", {
      autoClose: 1000,
      position: "top-left",
    });

  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .email("Deve ser um email")
      .required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
    userPasswordCheck: yup
      .string()
      .oneOf([yup.ref("password")], "A senha não está igual a digitada"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const newData = {
      email,
      password,
      name,
      bio,
      contact,
      course_module,
    };

    await api
      .post("users", newData)
      .then((response) => {
        if (response.status === 201) {
          accountCreated();
          return navigate("/");
        }
      })
      .catch((err) => accountError());
  };
  return (
    <Container>
      <ContainerTitle>
        <h1 className="kenzieHubTitle">Kenzie Hub</h1>
        <Link className="returnButton" to="/">
          {" "}
          Voltar
        </Link>{" "}
      </ContainerTitle>

      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>

        <Input
          id="user"
          placeholder="Digite aqui seu nome"
          label="Nome"
          {...register("name")}
          error={errors?.name}
          type="text"
        />
        {/* <label htmlFor="user">Nome</label>

        <input
          id="user"
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
        /> */}
        {/* {<errors.name?.message&& (<Error>
            <BiErrorCircle />
            </Error>
            )}
           */}
        {/* <span>{errors.name?.message}</span> */}
        <Input
          id="userEmail"
          placeholder="Digite aqui seu email"
          label="Email"
          {...register("email")}
          error={errors?.email}
          type="text"
        />

        <Input
          id="userPassword"
          placeholder="Digite aqui seu senha"
          label="Senha"
          {...register("password")}
          error={errors?.password}
          type="password"
        />

        <Input
          id="userPasswordCheck"
          placeholder="Digite novamente sua senha"
          label="Confirmar Senha"
          {...register("userPasswordCheck")}
          error={errors?.userPasswordCheck}
          type="password"
        />

        <Input
          id="bio"
          placeholder="Fale sobre você"
          label="Bio"
          {...register("bio")}
          error={errors?.bio}
          type="text"
        />

        <Input
          id="contact"
          placeholder="Opção de contato"
          label="Contato"
          {...register("contact")}
          error={errors?.contact}
          type="number"
        />

        <label htmlFor="select"> Selecionar Módulo</label>
        <select name="" id="select" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)<">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
        <span>{errors.course_module?.message}</span>
        <button type="submit">Cadastrar</button>
      </RegisterForm>
    </Container>
  );
};

export default Singup;
