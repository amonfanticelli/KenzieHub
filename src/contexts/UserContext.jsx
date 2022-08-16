import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState([]);
  const [getTechList, setTechList] = useState([]);
  const [currentObject, setCurrentObject] = useState({});

  const techCreated = () =>
    toast.success("Tecnologia adicionada com sucesso!", { autoClose: 1000 });

  const accountCreated = () =>
    toast.success("Conta criada com sucesso!", { autoClose: 1000 });

  const accountError = () =>
    toast.error("Ops! Algo deu errado", {
      autoClose: 1000,
      position: "top-left",
    });

  const handleRegister = async ({
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

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        setLogin(response.data.user);

        console.warn(login);
        // window.localStorage.setItem(
        //   "@userData",
        //   JSON.stringify(response.data.user)
        // );
        window.localStorage.setItem("@token", response.data.token);

        window.localStorage.setItem("@userId", response.data.user.id);

        navigate(`/Dashboard/${response.data.user.id}`);
      })
      .catch((err) => console.warn(err));
  };

  const handlePostTech = (data) => {
    const token = localStorage.getItem("@token");

    api
      .post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => techCreated())
      .catch((err) => console.warn(err));
  };

  const handleGetUserId = () => {
    const userId = localStorage.getItem("@userId");
    api
      .get(`/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        const userData = {
          name: response.data.name,
          course_module: response.data.course_module,
        };
        setLogin(userData);
        setTechList(response.data.techs);
      })

      .catch((err) => console.warn(err));
  };

  const handleRemoveTech = (currentObject) => {
    const token = localStorage.getItem("@token");
    api
      .delete(`/users/techs/${currentObject.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        techCreated();
        setTechList(
          getTechList.filter((element) => {
            return element.id !== currentObject.id;
          })
        );
      });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        getTechList,
        handlePostTech,
        handleGetUserId,
        handleLogin,
        handleRegister,

        handleRemoveTech,
        currentObject,
        setCurrentObject,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
