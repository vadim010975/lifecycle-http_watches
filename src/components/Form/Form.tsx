import "./Form.css";
import React from "react";
import { FC } from "react";

const Form: FC<{ handleSubmit: (event: React.FormEvent) => void }> = ({ handleSubmit }) => {

  return (
    <form className="world-clock__form" onSubmit={handleSubmit}>
      <div>
        <label className="world-clock__form_label label_name" htmlFor="name">Название</label>
        <input type="text" id="name" name="name" className="world-clock__form_input input_name" required/>
      </div>
      <div>
        <label className="world-clock__form_label label_timeZone" htmlFor="timeZone">Временная зона</label>
        <input type="text" id="timeZone" name="timeZone" className="world-clock__form_input input_timeZone" required/>
      </div>
      <button className="world-clock__form_btn">Добавить</button>
    </form>
  );
}

export default Form;