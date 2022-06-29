import { navigate } from "gatsby";
import * as React from "react";
import fetchUsers from "../modules/fetchUsers";

import "../styles/main.scss";

const { useEffect, useState } = React;

// markup
function IndexPage() {
  const [users, setUsers] = useState<Array<any>>([]);
  const [emailInput, setEmailInput] = useState<string>("");
  useEffect(() => {
    fetchUsers(setUsers).catch(console.error);
  }, []);
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    return setEmailInput(value);
  };
  const authorizeUser = () => {
    const isAuth = users.findIndex((u) => u.email === emailInput) > -1;
    if (isAuth) {
      return navigate("/intro");
    }
  };
  return (
    <form className="sign-in__form" onSubmit={authorizeUser}>
      <p>
        <label>Email</label>
        <input type="text" onChange={handleEmailInput} value={emailInput} />
      </p>
      <p>
        <button type="submit">Access Album</button>
      </p>
    </form>
  );
}

export default IndexPage;
