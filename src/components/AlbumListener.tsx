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

const listenerDetail = {
  fontFamily: "Manrope",
  width: 180,
  marginBottom: 15,
};

function AlbumListener({ listener, unauthorizeUser }: AlbumListenerProps) {
  const isAuthorized = listener.authorized_at;
  const authorizedText = isAuthorized ? "Authorized" : "Not Authorized";
  return (
    <article
      style={{
        fontFamily: "Manrope",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span style={listenerDetail}>{listener.email}</span>
      <span style={listenerDetail}>{authorizedText}</span>
      <span
        style={listenerDetail}
        onClick={() => unauthorizeUser(listener)}
      >
        Change Status
      </span>
    </article>
  );
}

export default AlbumListener;
