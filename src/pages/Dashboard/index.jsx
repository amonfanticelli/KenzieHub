import { useNavigate, Link } from "react-router-dom";
import { Container, Header, Section, Main, Line } from "./style";
import { motion } from "framer-motion";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("@userData"));
  const navigate = useNavigate();
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
        <Header>
          <h1>Kenzie Hub </h1>
          <button onClick={() => removeUser()}>Sair</button>
        </Header>
        <Line></Line>
        <Section>
          <h1>Olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </Section>
        <Line></Line>
        <Main>
          <div>
            <h1>Que pena! estamos em desenvolvimento </h1>
            <span>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </span>
          </div>
        </Main>
      </Container>
    </motion.div>
  );
};
export default Dashboard;
