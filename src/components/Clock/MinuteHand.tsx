import { FC } from "react";
import { Row } from "jsxstyle";

const MinuteHand: FC<{ minutes: number }> = ({ minutes }) => {

  return (
    <div className="min">
      <Row className="mn" transform={"rotateZ(" + (minutes * 6) + "deg)"}/>
    </div >
  );
}

export default MinuteHand;