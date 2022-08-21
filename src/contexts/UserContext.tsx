import { createContext, useState, ReactNode } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler } from "react-hook-form";

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: number;
  course_module: string;
}

interface UserProps {
  children: ReactNode;
}

export interface UserProviderData {
  login: {
    name: string;
    course_module: string;
  };
  getTechList: Tech[];
  handlePostTech: (data: Omit<Tech, "id">) => void;
  handleGetUserId: () => void;
  handleLogin: (data: UserLogin) => void;
  handleRegister: (data: Omit<User, "id">) => void;
  handleRemoveTech: (currentObject: Tech) => void;
  currentObject: Tech;
  handleEditTech: (data: TechEdit) => void;
  setCurrentObject: React.Dispatch<React.SetStateAction<Tech>>;
}

export interface Tech {
  title: string;
  status: string;
  id: string;
}

export interface TechEdit {
  status: string;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<UserProviderData["login"]>(
    {} as UserProviderData["login"]
  );
  const [getTechList, setTechList] = useState<Tech[]>([]);
  const [currentObject, setCurrentObject] = useState<Tech>({} as Tech);

  const techCreated = () =>
    toast.success("Tecnologia adicionada com sucesso!", { autoClose: 1000 });

  const techEdited = () =>
    toast.success("Tecnologia editada com sucesso!", { autoClose: 1000 });

  const techRemoved = () =>
    toast.error("Tecnologia removida com sucesso!", { autoClose: 1000 });

  const accountCreated = () =>
    toast.success("Conta criada com sucesso!", { autoClose: 1000 });

  const passwordOrEmailError = () =>
    toast.error("Senha ou email incorreto!", { autoClose: 1000 });

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
  }: Omit<User, "id">) => {
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

  const handleEditTech: SubmitHandler<TechEdit> = (data: TechEdit) => {
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
        techEdited();
        handleGetUserId();
        console.log(response);
      })
      .catch((err) => console.warn(err));
  };

  const handleLogin = (data: UserLogin) => {
    api
      .post("/sessions", data)
      .then((response) => {
        if (response.status === 200) {
          setLogin(response.data.user);
          console.warn(login);
          window.localStorage.setItem("@token", response.data.token);

          window.localStorage.setItem("@userId", response.data.user.id);

          navigate(`/Dashboard/${response.data.user.id}`);
        }
        if (response.status === 401) {
          passwordOrEmailError();
        }
      })
      .catch((err) => console.warn(err));
  };

  const handleGetUserId = () => {
    const userId = localStorage.getItem("@userId");
    api
      .get<{
        name: string;
        course_module: string;
        techs: Tech[];
      }>(`/users/${userId}`)
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

  const handlePostTech = (data: Omit<Tech, "id">): void => {
    const token = localStorage.getItem("@token");

    api
      .post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        techCreated();
        handleGetUserId();
      })
      .catch((err) => console.warn(err));
  };

  const handleRemoveTech = (currentObject: Tech) => {
    const token = localStorage.getItem("@token");
    api
      .delete(`/users/techs/${currentObject.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        techRemoved();
        handleGetUserId();
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
        handleEditTech,
        handleRemoveTech,
        currentObject,
        setCurrentObject,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
