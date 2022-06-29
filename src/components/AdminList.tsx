import React, { useState, useEffect } from "react";
import axios from "axios";
import { ALBUM_API_URL } from "../constants";
import AlbumListener, { Listener } from "../components/AlbumListener";

function AdminList() {
  const [users, setUsers] = useState<Array<any>>([]);
  const [userToAdd, editUsersToAdd] = useState<string>("");
  const fetchData = async () => {
    const data = await fetch(ALBUM_API_URL);
    const json = await data.json();
    setUsers(json.albumListeners);
  };
  useEffect(() => {
    fetchData().catch(console.error);
  }, []);
  const addUser = async () => {
    const data = { email: userToAdd, authorized_at: new Date().toISOString() };
    const res = await axios.post(ALBUM_API_URL, data);
    if (res.status === 200) {
      fetchData();
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
      return fetchData();
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
    <div className="admin__container">
      <header>Admitted Users</header>
      {userList}
      <form id="add-user__form">
        <input type="text" onChange={handleAddUserInput} />
        <button onClick={addUser}>Add User</button>
      </form>
    </div>
  );
}

export default AdminList;
