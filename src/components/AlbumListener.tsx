import React from "react";

export type Listener = {
  _id: string;
  email: string;
  authorized_at: string;
  listened_at: string;
};

interface AlbumListenerProps {
  listener: Listener;
  unauthorizeUser: Function;
}

function AlbumListener({ listener, unauthorizeUser }: AlbumListenerProps) {
  const isAuthorized = listener.authorized_at;
  const authorizedText = isAuthorized ? "Authorized" : "Not Authorized";
  return (
    <article className="album__listener">
      <span>{listener.email}</span>
      <span>{authorizedText}</span>
      <span onClick={() => unauthorizeUser(listener)}>Change Status</span>
    </article>
  );
}

export default AlbumListener;
