import React, { useState } from "react";

import AdminList from "../components/AdminList";

import "../styles/main.scss";

import { ADMIN_LIST } from "../constants";

function Admin() {
  const [isAuthorized, toggleAuth] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    return setEmailInput(value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = ADMIN_LIST.includes(emailInput);
    toggleAuth(isEmailValid);
  };
  const authForm = (
    <form className="sign-in__form" onSubmit={handleSubmit}>
      <p>
        <label>Email</label>
        <input type="text" onChange={handleEmailInput} value={emailInput} />
      </p>
      <p>
        <button type="submit">Sign In</button>
      </p>
    </form>
  );
  const content = !isAuthorized ? authForm : <AdminList />;
  return <section>{content}</section>;
}

export default Admin;
