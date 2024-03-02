import { FC } from "react";
import { Row } from "jsxstyle";

const HourHand: FC<{ hours: number, minutes: number }> = ({ hours, minutes }) => {

  return (
    <div className="hour">
      <Row className="hr" transform={"rotateZ(" + (hours * 30 + minutes / 2) + "deg)"}/>
    </div >
  );
}

export default HourHand;