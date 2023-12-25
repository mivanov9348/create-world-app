import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Build from "./pages/Build";
import Generator from "./pages/Generator";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./Layouts/AuthLayout";
import Layout from "./Layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="build" element={<Build />} />
          <Route path="generator" element={<Generator />} />

          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
