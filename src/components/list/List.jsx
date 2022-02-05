import React, { useState } from "react";
import Card from "../card/Card";
import "./List.css";

const List = ({ card }) => {
  const [isOpenCard, setIsOpenCard] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <h2 className="title" onClick={() => setIsOpen((prev) => !prev)}>
        {card.title}
      </h2>
      {isOpen && (
        <ul className="cardList">
          {card.items.map((val) => (
            <Card
              item={val}
              key={val.title}
              isOpen={isOpenCard === val.title}
              onOpen={() =>
                setIsOpenCard((prev) => (prev === val.title ? "" : val.title))
              }
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default List;
