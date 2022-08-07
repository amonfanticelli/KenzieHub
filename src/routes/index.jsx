import { Routes, Route } from "react-router-dom";
import Singup from "../pages/Singup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";

const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/Register" element={<Singup />} />
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard/:id" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
