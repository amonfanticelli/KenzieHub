import { Routes, Route } from "react-router-dom";
import Singup from "../pages/Singup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/Register" element={<Singup />} />
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
