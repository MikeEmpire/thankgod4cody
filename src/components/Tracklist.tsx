import React from "react";
import { useSpring, animated } from "react-spring";

interface TracklistProps {
  trackProgress: number | undefined;
}

const tracklistNames = [
  "U Already Know",
  "LMW 2",
  "Free Finesse ft. Finesse 2Tymes",
  "Talents",
  "Gloria Foster",
  "On my Mind",
  "Paint the Pain",
  "Handle Bars (2222 + KMITL)",
  "Toxic",
  "3 AM ft. SZA",
  "Get It All",
  "Le$$on$",
  "C U Again",
  "Masochist",
  "Angls",
  "2 Much 2 Lose",
];

function Tracklist({ trackProgress }: TracklistProps) {
  if (!trackProgress) {
    return null;
  }
  const trackName = (progress: number): string => {
    switch (true) {
      case progress >= 2787.48:
        return tracklistNames[15];
      case progress >= 2588.48:
        return tracklistNames[14];
      case progress >= 2413.36:
        return tracklistNames[13];
      case progress >= 2246.58:
        return tracklistNames[12];
      case progress >= 2050.64:
        return tracklistNames[11];
      case progress >= 1927.56:
        return tracklistNames[10];
      case progress >= 1698.9:
        return tracklistNames[9];
      case progress >= 1429.95:
        return tracklistNames[8];
      case progress >= 1239.799:
        return tracklistNames[7];
      case progress >= 1239.799:
        return tracklistNames[7];
      case progress >= 989.88:
        return tracklistNames[6];
      case progress >= 812.5:
        return tracklistNames[5];
      case progress >= 721.883:
        return tracklistNames[4];
      case progress >= 530.6:
        return tracklistNames[3];
      case progress >= 420.7:
        return tracklistNames[2];
      case progress >= 219.4:
        return tracklistNames[1];
      default:
        return tracklistNames[0];
    }
  };
  const { x } = useSpring({
    from: { x: -1 },
    x: 0,
    config: { duration: 1000 },
  });
  return (
    <article className="song" style={{ color: "white" }}>
      <header className="song__artist" style={{ marginBottom: 10 }}>
        THANKGOD4CODY
      </header>
      <animated.div
        className="song__title"
        style={{
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
        {trackName(trackProgress)}
      </animated.div>
    </article>
  );
}

export default Tracklist;
