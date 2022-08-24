import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Section,
  Main,
  Line,
  HeaderContainer,
  SectionContainer,
} from "./style";
import { motion } from "framer-motion";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import ModalEditRemove from "../../components/ModalEditRemove";
import Modal from "../../components/ModalAddTech";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@token");
  !token && navigate("../");
  const {
    login,
    handleGetUserId,
    getTechList,
    currentObject,
    setCurrentObject,
    isModalOpen,
    setModal,
    isModalEditOpen,
    setModalEdit,
  } = useContext(UserContext);

  useEffect(() => {
    handleGetUserId();
  }, []);

  const removeUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        {isModalOpen && <Modal setModal={setModal} />}
        {isModalEditOpen && (
          <ModalEditRemove
            currentObject={currentObject}
            setModalEdit={setModalEdit}
          />
        )}

        <Header>
          <HeaderContainer>
            <h1>Kenzie Hub </h1>
            <button onClick={() => removeUser()}>Sair</button>
          </HeaderContainer>
        </Header>
        <Line></Line>
        <Section>
          <SectionContainer>
            <h1>Olá, {login.name}</h1>
            <span>{login.course_module}</span>
          </SectionContainer>
        </Section>
        <Line></Line>
        <Main>
          <section>
            <h1>Tecnologias </h1>
            <button onClick={() => setModal(!isModalOpen)}>
              <BsPlusLg />
            </button>
          </section>
          <ul>
            {getTechList.map((tech) => (
              <li key={tech.id}>
                <h2>{tech.title}</h2>
                <div>
                  <span>{tech.status}</span>
                  <button
                    onClick={() => {
                      setModalEdit(!isModalEditOpen);
                      setCurrentObject(tech);
                    }}
                  >
                    {" "}
                    <RiFileEditLine />{" "}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Main>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
