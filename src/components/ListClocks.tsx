import { FC } from "react";
import Clock from "./Clock/Clock";

type ListClocksProps = {
  list: {
    city: string,
    timeZone: {
      sign: string,
      hours: number,
      minutes: number,
    },
  }[],
  handleClick: (city: string)=>void,
};

const ListClocks: FC<ListClocksProps> = ({ list, handleClick }) => {

  return (
    <ul className="list-clocks">
      {list.map(item => (
        <Clock city={item.city} timeZone={item.timeZone} handleClick={handleClick} key={item.city} />
      ))}

    </ul>
  );
}

export default ListClocks;