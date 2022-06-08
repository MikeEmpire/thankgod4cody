import { useSpring, animated } from "react-spring";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "../styles/main.scss";
import "../styles/bokeh.scss";
import "../styles/textscale.scss";

import Tracklist from "../components/Tracklist";
import Transition from "../components/Transition";
import Play from "../components/Play";
import Bar from "../components/Bar";
import Pause from "../components/Pause";
import useAudioPlayer from "../components/useAudioPlayer";

// markup
function KMITL({ location }: any) {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { frequency: 10, mass: 40, friction: 200 },
    delay: 3000,
  });
  const containerVariants = {
    mount: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 3,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 3,
        when: "afterChildren",
        staggerChildren: 0.015,
      },
    },
  };

  const introVariants = {
    mount: {
      scale: 0.01,
      transition: {
        duration: 2,
        staggerChildren: 1.5,
      },
      y: 270,
      x: 300,
      opacity: 1,
    },
    rest: {
      y: -180,
      x: 30,
      scale: [0.01, 1.5],
      opacity: [1, 0],
      transition: { duration: 3, },
    },
  };

  return (
    <Transition>
      <motion.article
        style={{ position: "absolute", width: "100%", overflow: "hidden" }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/motion.svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
          variants={introVariants}
          style={{ width: "100%" }}
          initial="mount"
          animate="rest"
        >
          <defs>
            <path
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
              id="textcircle"
            ></path>
          </defs>
          <text dy="70" textLength="1220">
            <textPath xlinkHref="#textcircle">Keep Me In The Light</textPath>
          </text>
        </motion.svg>
      </motion.article>
      <animated.div style={props}>
        <div>
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
        </div>
      </animated.div>
    </Transition>
  );
}

export default KMITL;
