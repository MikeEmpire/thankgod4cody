import React from "react";
import { PauseCircleFilled } from "@material-ui/icons";

interface PlayProps {
  handleClick: Function;
}

export default function Play({ handleClick }: PlayProps) {
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseCircleFilled />
    </button>
  );
}
