import "./Clock.css";
import { FC, useEffect, useState } from "react";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
const LOCAL_TIME_OFFSET_MS = (new Date()).getTimezoneOffset() * 60 * 1000;

type ClockProps = {
  city: string,
  timeZone: {
    sign: string,
    hours: number,
    minutes: number,
  }
  handleClick: (city: string) => void,
}

const Clock: FC<ClockProps> = ({ city, timeZone, handleClick }) => {

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  let timeout: number;

  const setTimeOnClock = () => {
    const date = new Date(Date.now() + LOCAL_TIME_OFFSET_MS + (timeZone.hours * 60 + timeZone.minutes) * 60 * 1000 * (timeZone.sign === "+" ? 1 : -1));
    setTime({ hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() });
    timeout = setTimeout(() => {
      setTimeOnClock();
    }, 1000);
  }

  useEffect(() => {
    setTimeOnClock();
    return () => {
      window.clearTimeout(timeout);
    }
  }, []);

  const hoursStr = (timeZone.hours.toString().length === 1 ? "0" : "") + timeZone.hours.toString();
  const minutesStr = (timeZone.minutes.toString().length === 1 ? "0" : "") + timeZone.minutes.toString();

  return (
    <li className="clock_container">
      <h3 className="clock_title">{city}</h3>
      <h3 className="clock_title">{timeZone.sign + hoursStr + ":" + minutesStr}</h3>
      <div className="clock_wrapper">
        <div className="clock">
          <HourHand hours={time.hours} minutes={time.minutes} />
          <MinuteHand minutes={time.minutes} />
          <SecondHand seconds={time.seconds} />
        </div>
      </div>
      <button onClick={() => { handleClick(city) }} className="clock_btn">X</button>
    </li>
  );
}

export default Clock;