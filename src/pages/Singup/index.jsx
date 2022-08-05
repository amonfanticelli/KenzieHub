import { RegisterForm, Container, ContainerTitle } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

const Singup = () => {
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
    console.log(newData);
    await api
      .post("users", newData)
      .then((response) => {
        navigate("/");
        response.status === 201 ? navigate("/") : window.alert("erro");
      })
      .catch((err) => console.warn(err));
  };
  return (
    <Container>
      <ContainerTitle>
        <h1 className="kenzieHubTitle">Kenzie Hub</h1>
        <button className="returnButton">
          <Link to="/"> Voltar</Link>{" "}
        </button>
      </ContainerTitle>

      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <label htmlFor="user">Nome</label>
        <input
          id="user"
          placeholder="Digite aqui seu nome"
          type="text"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          placeholder="Digite aqui seu email"
          type="text"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="userPassword">Senha</label>
        <input
          id="userPassword"
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <label htmlFor="userPasswordCheck">Confirmar Senha</label>
        <input
          id="userPasswordCheck"
          placeholder="Digite novamente sua senha"
          type="password"
          {...register("userPasswordCheck")}
        />
        <span>{errors.userPasswordCheck?.message}</span>
        <label className="label" htmlFor="bio">
          Bio
        </label>
        <input
          id="bio"
          placeholder="Fale sobre você"
          type="text"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>
        <label className="label" htmlFor="contact">
          Contato
        </label>
        <input
          id="contact"
          placeholder="Opção de contato"
          type="text"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>
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
