import React from "react";
import moment from "moment";
import "moment-duration-format";

interface BarProps {
  duration: number | undefined;
  curTime: number | undefined;
  onTimeUpdate: Function;
}

export default function Bar({ duration, curTime, onTimeUpdate }: BarProps) {
  if (!curTime || !duration) {
    return null;
  }

  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration: any) {
    const mDuration = moment.duration(duration, "seconds");
    const formatString = "mm:ss";
    let options: moment.DurationFormatSettings = {
      forceLength: false,
      precision: 0,
      template: formatString,
      trim: false,
    };
    const result = mDuration.format(formatString, 0, options);
    return result;
  }

  function calcClickedTime(e: any) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress") as HTMLElement;
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e: any) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove: any) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="bar">
      <article className="bar__time">{formatDuration(curTime)}</article>
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, #9198e5 ${curPercentage}%, white 0)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <article
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 1}%` }}
        />
      </div>
      <article className="bar__time">{formatDuration(duration)}</article>
    </div>
  );
}
