import React, { useState, useEffect } from "react";
import axios from "axios";
import { ALBUM_API_URL } from "../constants";
import AlbumListener, { Listener } from "../components/AlbumListener";
import fetchUsers from "../modules/fetchUsers";

import "../styles/main.scss";

function AdminList() {
  const [users, setUsers] = useState<Array<any>>([]);
  const [userToAdd, editUsersToAdd] = useState<string>("");
  useEffect(() => {
    fetchUsers(setUsers).catch(console.error);
  }, []);
  const addUser = async (e: any) => {
    e.preventDefault();
    const data = { email: userToAdd, authorized_at: new Date().toISOString() };
    const res = await axios.post(ALBUM_API_URL, data);
    if (res.status === 200) {
      fetchUsers(setUsers);
    }
    console.log(res);
  };
  const handleAddUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    editUsersToAdd(e.target.value);
  const unauthorizeUser = async (u: Listener) => {
    // edit authorized_at to null
    const newUser = JSON.parse(JSON.stringify(u));
    if (u.authorized_at === null) {
      newUser.authorized_at = new Date().toTimeString();
    } else {
      newUser.authorized_at = null;
    }
    const editUserUrl = `${ALBUM_API_URL}/${u._id}`;
    const res = await axios.put(editUserUrl, newUser);
    if (res.status === 200) {
      return fetchUsers(setUsers);
    }
    console.log(res);
  };
  const userList =
    users.length > 0 &&
    users.map((u: Listener) => (
      <AlbumListener
        key={u._id}
        listener={u}
        unauthorizeUser={unauthorizeUser}
      />
    ));
  return (
    <div style={{ fontFamily: "Manrope", color: "white" }}>
      <header
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          margin: 15,
          fontWeight: 500,
        }}
      >
        Admitted Users
      </header>
      {userList}
      <section id="add-user__form">
        <input type="text" onChange={handleAddUserInput} />
        <span onClick={addUser}>Add User</span>
      </section>
    </div>
  );
}

export default AdminList;
