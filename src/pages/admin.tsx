import React, { useState } from "react";

import AdminList from "../components/AdminList";

import "../styles/main.scss";

import { ADMIN_LIST } from "../constants";

function Admin() {
  const [isAuthorized, toggleAuth] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const handleEmailInput = (e: any) => {
    const { value } = e.target;
    return setEmailInput(value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isEmailValid = ADMIN_LIST.includes(emailInput.toLowerCase());
    toggleAuth(isEmailValid);
  };
  const authForm = (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <p
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <label>Email</label>
        <input type="text" onChange={handleEmailInput} value={emailInput} />
      </p>
      <p>
        <span className="submit__btn" onClick={handleSubmit}>
          Sign In
        </span>
      </p>
    </section>
  );
  const content = !isAuthorized ? authForm : <AdminList />;
  return <section>{content}</section>;
}

export default Admin;
