import React, { useState } from "react";
import css from "./AluList.module.css";
import AluItemDetail from "../../components/AluItemDetail/AluItemDetail";
import { useCallback } from "react";

const AluList = ({ items, activeComponent, density, setDensity }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [weights, setWeights] = useState({
    totalWeight: 0.0,
    totalWeightPerKg: 0.0,
  });

  const handleWeightChange = useCallback((newWeights) => {
    setWeights((prevWeights) => {
      if (JSON.stringify(prevWeights) !== JSON.stringify(newWeights)) {
        return newWeights;
      }
      return prevWeights;
    });
  }, []);

  return (
    <>
      <div className="aluminium">
        <ul className={css.list}>
          {items.map((item) => (
            <li
              key={item.id}
              className={`${css.li} ${
                selectedItem === item ? css.selected : ""
              }`}
            >
              <div
                onClick={() => setSelectedItem(item)}
                onMouseOver={() => setHoveredItem(item)}
                onMouseOut={() => setHoveredItem(null)}
                className={`${css.link}`}
              >
                <img
                  src={
                    selectedItem === item || hoveredItem === item
                      ? item.image2
                      : item.image
                  }
                  alt={item.name}
                  style={{ width: "40%" }}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="details">
          {selectedItem && (
            <AluItemDetail
              item={selectedItem}
              activeComponent={activeComponent}
              density={density}
              setDensity={setDensity}
              onWeightChange={handleWeightChange}
            />
          )}
        </div>
        <div className="info">
          * Każdy wynik to masa przypuszczalna - wynik nie uwzględnia tolerancji
          wykonania.
        </div>
        {weights.totalBlacha ? (
          <>
            <p className="pweight">
              Masa arkusza:{" "}
              <span className="redWeight">
                {weights.totalBlacha}
                <span className="weight">kg/arkusz</span>
              </span>
            </p>
          </>
        ) : (
          ""
        )}
        {weights.totalWeight ? (
          <>
            <p className="pweight">
              Waga całkowita:{" "}
              <span className="redWeight">
                {isNaN(weights.totalWeight) ? "0.000" : weights.totalWeight}
                <span className="weight">kg </span>
              </span>{" "}
            </p>
          </>
        ) : (
          ""
        )}
        {weights.totalWeightPerKg ? (
          <>
            <p className="pweight">
              Waga na metr:{" "}
              <span className="redWeight">
                {isNaN(weights.totalWeightPerKg)
                  ? "0.000"
                  : weights.totalWeightPerKg}
                <span className="weight">kg/m</span>
              </span>
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AluList;
