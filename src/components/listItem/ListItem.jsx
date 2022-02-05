import { useState } from "react";
import List from "../list/List";

const ListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <h2 onClick={() => setIsOpen((prev) => !prev)}>{item.title}</h2>
      {isOpen && (
        <ul>
          {item.items.map((item1) =>
            item1.items.find((val) => !!val.data) ? (
              <List card={item1} key={item1.title} />
            ) : (
              <ListItem item={item1.items} key={item1.title} />
            )
          )}
        </ul>
      )}
    </li>
  );
};

export default ListItem;
