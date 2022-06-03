import { useSpring, animated } from "react-spring";
import React, { useEffect, useRef, useState } from "react";

import "../styles/main.scss";

import audioFile from "../assets/KMITL-Stream.mp4";
import Tracklist from "../components/Tracklist";
import Play from "../components/Play";
import Bar from "../components/Bar";
import Pause from "../components/Pause";
import useAudioPlayer from "../components/useAudioPlayer";

// markup
function KMITL() {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();

  return (
    <div>
      <div className="background">
        {playing && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
        <Tracklist trackProgress={curTime} />
        <main className="player">
          <audio id="audio" autoPlay>
            <source src={`https://docs.google.com/uc?export==download&id=1HG3KJMdtRf_kap4wndIdYO7jOzfPw02f`} type="audio/wav" />
            Your browser does not support the <code>audio</code> element.
          </audio>
          <div className="controls">
            {playing ? (
              <Pause handleClick={() => setPlaying(false)} />
            ) : (
              <Play handleClick={() => setPlaying(true)} />
            )}
            <Bar
              curTime={curTime}
              duration={duration}
              onTimeUpdate={(time: number) => setClickedTime(time)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default KMITL;
