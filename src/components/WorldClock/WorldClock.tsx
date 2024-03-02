import "./WorldClock.css";
import { useState } from "react";
import Form from "../Form/Form";
import ListClocks from "../ListClocks";

const WorldClock = () => {
  const [cities, setСities] = useState([
    {
      city: "Moscow",
      timeZone: { sign: "+", hours: 3, minutes: 0 },
    },
    {
      city: "London",
      timeZone: { sign: "+", hours: 0, minutes: 0 },
    }
  ]);



  // const handleSubmit = (event: React.FormEvent) => {
  /* eslint-disable-next-line */
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { target } = event;
    const city = target.elements.name.value;
    if (cities.some(el => el.city === city)) {
      target.reset();
      return;
    }
    const timeZone = target.elements.timeZone.value;
    target.reset();
    const param = parseTimeZone(timeZone);
    if (param) {
      const { sign, hours, minutes } = param;
      const arr = [...cities];
      arr.push({
        city: city,
        timeZone: {
          sign,
          hours,
          minutes,
      }
      });
      setСities(arr);
    }
  }

  const parseTimeZone = (string: string): { sign: string, hours: number, minutes: number } | undefined => {
    const str = string.replace(",", ".");
    let sign: string;
    let time: string;
    let hours: number = 0;
    let minutes: number = 0;
    if (str.startsWith("+")) {
      sign = "+";
      time = str.substring(1, str.length);
    } else if (str.startsWith("-")) {
      sign = "-";
      time = str.substring(1, str.length);
    } else {
      time = str;
      sign = "+";
    }
    const arrStr = time.split(".");
    if (arrStr.length < 1 || arrStr.length > 2) {
      return;
    }
    if (arrStr.length === 1) {
      hours = +arrStr[0];
      if (isNaN(hours) || hours > 12) {
        return;
      }
    } else if (arrStr.length === 2) {
      hours = +arrStr[0];
      minutes = arrStr[1].length === 1 ? +(arrStr[1] + "0") : +arrStr[1];
      if (isNaN(hours) || hours > 12 || isNaN(minutes) || minutes > 60) {
        return;
      }
    }
    return {sign, hours, minutes};
  }

  const handleClick = (city: string) => {
    const arr = cities.filter(el => el.city != city);
    setСities(arr);
  }


  return (

    <div className="world-clock">
      <Form handleSubmit={handleSubmit} />
      <ListClocks list={cities} handleClick={handleClick} />
    </div>
  );
}

export default WorldClock;