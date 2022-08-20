import { Container, LoginForm } from "./style";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext, UserLogin } from "../../contexts/UserContext";

const Login = () => {
  const { handleLogin } = useContext(UserContext);

  let inputType = "password";
  const [visible, setVisibility] = useState("password");
  const changeInputType = () => {
    console.warn(inputType);
    visible === "password" ? setVisibility("text") : setVisibility("password");
  };

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
  } = useForm<UserLogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <LoginForm onSubmit={handleSubmit(handleLogin)}>
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
