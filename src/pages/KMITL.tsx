import { useSpring, animated } from "react-spring";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import "../styles/main.scss";
import "../styles/bokeh.scss";
import "../styles/introtransition.scss";

import Tracklist from "../components/Tracklist";
import Transition from "../components/Transition";
import Play from "../components/Play";
import Bar from "../components/Bar";
import Pause from "../components/Pause";
import useAudioPlayer from "../components/useAudioPlayer";

// markup
function KMITL({ location }: any) {
  const isFirstMount = !location.action;
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { frequency: 10, mass: 40, friction: 200 },
    delay: 3000,
  });

  return (
    <Transition>
      <div className="container">
        <h1 className="title">
          <span>Keep Me In</span>
          <span>The Light</span>
        </h1>
      </div>
      <animated.div style={props}> 
        <div style={{ height: "100vh" }} className="background">
          {playing && (
            <>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
              <span className="bokeh"></span>
            </>
          )}
          <Tracklist trackProgress={curTime} />
          <main className="player">
            <audio id="audio" autoPlay>
              <source
                src={`https://docs.google.com/uc?export==download&id=1HG3KJMdtRf_kap4wndIdYO7jOzfPw02f`}
                type="audio/wav"
              />
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
      </animated.div>
    </Transition>
  );
}

export default KMITL;
