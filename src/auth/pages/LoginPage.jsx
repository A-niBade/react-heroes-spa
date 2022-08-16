import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/LoginPage.css";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Invitado");
    const lastPath = localStorage.getItem("lastPath") || "/";

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <>
      <div className="login">
        <div className="login-info">
          <h1>Heroes SPA</h1>
          <h5>Access Granted</h5>
          <button className="btn-login" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
