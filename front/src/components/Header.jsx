import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";

function Header() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const logoutHandler = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setUser(user);
  }, []);

  const { ProjectName, AllHeaderBox, UserLogoutBox } = styles;

  return (
    <div className={AllHeaderBox}>
      <div>
        <div>
          <h1 className={ProjectName}>Femora</h1>
        </div>
      </div>
      <div className={UserLogoutBox}>
        <div>{!user ? "" : <h2>User {user}</h2>}</div>
        <div onClick={() => logoutHandler()}>
          <button type="submit" className="btn btn-success w-20 rounded-0">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
