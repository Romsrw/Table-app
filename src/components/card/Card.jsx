import React from "react";
import { format } from "date-fns";
import Table from "../table/Table";
import "./Card.css";

const Card = ({ item, isOpen, onOpen }) => {
  return (
    <div className="wrapper">
      <div className="card" onClick={onOpen}>
        <div className="card__title">
          <span>{item.title}</span>
          <span>{item.subTitle}</span>
        </div>
        <div className="card__date">
          {format(new Date(item.dateStart), "dd.MM.yyyy")} -{" "}
          {format(new Date(item.dateEnd), "dd.MM.yyyy")}
        </div>
      </div>
      {isOpen && <Table data={item.data} />}
    </div>
  );
};

export default Card;
