import { ALBUM_API_URL } from "../constants";

const fetchUsers = async (setState: any) => {
  const data = await fetch(ALBUM_API_URL);
  const json = await data.json();
  return setState(json.albumListeners);
};

export default fetchUsers;
