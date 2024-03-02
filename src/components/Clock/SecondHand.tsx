import { FC } from "react";
import { Row } from "jsxstyle";

const SecondHand: FC<{ seconds: number }> = ({ seconds }) => {

  return (
    <div className="sec">
      <Row className="sc" transform={"rotateZ(" + (seconds * 6) + "deg)"}/>
    </div >
  );
}

export default SecondHand;