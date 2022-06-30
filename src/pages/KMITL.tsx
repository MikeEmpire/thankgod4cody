import React, { useState } from "react";
import { navigate } from "gatsby";
import { motion } from "framer-motion";
import AudioPlayer from "react-h5-audio-player";

import "../styles/main.scss";
import "../styles/bokeh.scss";
import "../styles/textscale.scss";

import album from "../assets/KMITL-Stream.mp3";
import Tracklist from "../components/Tracklist";

// markup
function KMITL() {
  if (typeof window !== "undefined") {
    const authUser = localStorage.getItem("listener");
    if (!authUser) {
      return navigate("/");
    }
  }
  const [currTime, setCurrTime] = useState<number>(0);
  const [isPlaying, togglePlaying] = useState<boolean>(false);
  const container = {
    hidden: {
      opacity: 1,
      transition: {
        ease: [0.77, 0, 0.175, 1],
        duration: 1.5,
      },
    },
    show: {
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
        style={{
          color: "white",
          fontFamily: "Kraut Type Fuck",
          textAlign: "center",
        }}
        variants={textVariants}
        initial="hidden"
        animate="show"
      >
        <span>Keep Me In The Light</span>
      </motion.h1>
      <section
        style={{ height: "60vh", display: "flex", flexDirection: "column" }}
      >
        {isPlaying && <span className="led"></span>}
        <Tracklist trackProgress={currTime} />
        <motion.main
          className="player"
          variants={playerVariants}
          initial="hidden"
          animate="show"
          style={{
            backgroundColor: "transparent",
            transition: ".2s all",
          }}
        >
          <AudioPlayer
            src={album}
            showDownloadProgress={false}
            onListen={(l) => {
              if (l.target) {
                const target = l.target as HTMLAudioElement;
                setCurrTime(target.currentTime);
              }
            }}
            showSkipControls={false}
            onPlay={() => togglePlaying(true)}
            onPause={() => togglePlaying(false)}
          />
        </motion.main>
      </section>
    </div>
  );
}

export default KMITL;
