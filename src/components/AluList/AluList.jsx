import React, { useState } from "react";
import css from "./AluList.module.css";
import AluItemDetail from "../../components/AluItemDetail/AluItemDetail";

const AluList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="aluminium">
        <ul className={css.list}>
          {items.map((item) => (
            <li key={item.id} className={css.li}>
              <div
                onClick={() => setSelectedItem(item)}
                className={`${css.link} ${
                  selectedItem === item ? css.selected : ""
                }`}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    height="30"
                    width="30"
                  />
                  <h3>{item.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ maxWidth: "900px", width: "100%" }}>
          {selectedItem && <AluItemDetail item={selectedItem} />}
        </div>
      </div>
    </>
  );
};

export default AluList;
