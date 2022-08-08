import api from "../../services/api";
import { Container, LoginForm } from "./style";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  let inputType = "password";
  const [visible, setVisibility] = useState("password");
  const changeInputType = () => {
    console.warn(inputType);
    visible === "password" ? setVisibility("text") : setVisibility("password");
  };
  const notifyAddCart = () =>
    toast.success("Adicionado ao carrinho!", { autoClose: 1000 });

  const notifyRemoveFromCart = () =>
    toast.error("Removido do carrinho!", {
      autoClose: 1000,
      position: "top-left",
    });

  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Precisa ser um email")
      .required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        window.localStorage.setItem(
          "@userData",
          JSON.stringify(response.data.user)
        );
        window.localStorage.setItem("@token", response.data.token);

        window.localStorage.setItem("@userId", response.data.user.id);

        navigate(`/Dashboard/${response.data.user.id}`);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Login</h2>
        </div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type={visible}
          placeholder="Senha"
          {...register("password")}
        />{" "}
        <FaRegEye
          onClick={() => changeInputType()}
          className="passwordIconShow"
        />
        <span>{errors.password?.message}</span>
        <button className="login" type="submit">
          Entrar
        </button>
        <span>Ainda não possui uma conta?</span>
        <Link className="registerButton" to="/Register">
          {" "}
          Cadastre-se
        </Link>
      </LoginForm>
    </Container>
  );
};

export default Login;
