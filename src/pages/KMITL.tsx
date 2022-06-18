import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "../styles/main.scss";
import "../styles/bokeh.scss";
import "../styles/textscale.scss";

import Tracklist from "../components/Tracklist";
import Play from "../components/Play";
import Bar from "../components/Bar";
import Pause from "../components/Pause";
import useAudioPlayer from "../components/useAudioPlayer";

// markup
function KMITL() {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();

  const container = {
    hidden: {
      top: 0,
      opacity: 1,
      transition: {
        ease: [0.77, 0, 0.175, 1],
        duration: 1.5,
      },
    },
    show: {
      top: -1000,
      opacity: 0,
      transition: {
        ease: [0.77, 0, 0.175, 1],
        duration: 1.5,
      },
    },
  };

  const playerVariants = {
    hidden: {
      scale: 0,
      top: 100,
      transition: {
        duration: 2,
      },
    },
    show: { scale: 1, top: 0, transition: { delay: 2 } },
  };

  const textVariants = {
    hidden: {
      y: -100,
      transition: {
        ease: [0.77, 0, 0.175, 1],
        duration: 0.5,
        delay: 1,
      },
    },
    show: {
      y: 0,
      transition: {
        ease: [0.77, 0, 0.175, 1],
        duration: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          position: "absolute",
        }}
      />
      <motion.h1
        style={{ color: "white" }}
        variants={textVariants}
        initial="hidden"
        animate="show"
      >
        <span>Keep Me In The Light</span>
      </motion.h1>
      <motion.section variants={playerVariants} initial="hidden" animate="show">
        {playing && <span className="led"></span>}
        <Tracklist trackProgress={curTime} />
        <main
          className="player"
          style={{
            backgroundColor: !playing ? "transparent" : "#070707",
            transition: ".2s all",
          }}
        >
          <audio id="audio" autoPlay>
            <source
              src={`https://docs.google.com/uc?export==download&id=1HG3KJMdtRf_kap4wndIdYO7jOzfPw02f`}
              type="audio/wav"
            />
            Your browser does not support the <code>audio</code> element.
          </audio>
          <div
            className="controls"
            style={{ marginTop: !playing ? "50%" : "auto" }}
          >
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
      </motion.section>
    </div>
  );
}

export default KMITL;
