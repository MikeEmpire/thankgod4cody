import { navigate } from "gatsby";
import * as React from "react";
import { Listener } from "../components/AlbumListener";
import fetchUsers from "../modules/fetchUsers";

import "../styles/main.scss";

const { useEffect, useState } = React;

// markup
function IndexPage() {
  const [users, setUsers] = useState<Array<Listener>>([]);
  const [emailInput, setEmailInput] = useState<string>("");
  useEffect(() => {
    fetchUsers(setUsers).catch(console.error);
  }, []);
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    return setEmailInput(value);
  };
  const authorizeUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email.toLowerCase() === emailInput.toLowerCase()
    );
    if (user?.authorized_at) {
      localStorage.setItem("listener", JSON.stringify(user.email));
      return navigate("/intro");
    }
    return null;
  };
  return (
    <section className="sign-in__form">
      <p>
        <label>Email</label>
        <input type="text" onChange={handleEmailInput} value={emailInput} />
      </p>
      <p>
        <span className="submit__btn" onClick={authorizeUser}>
          Access Album
        </span>
      </p>
    </section>
  );
}

export default IndexPage;
