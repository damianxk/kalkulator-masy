import React, { useState, useEffect } from "react";

const Katowniki = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [x / 1000, y / 1000, zBox / 1000, length]);

  const calculateWeight = () => {
    const calculatedWeight = ((x * zBox + (y - zBox) * zBox) * 8) / 1000;
    const weight = calculatedWeight;
    const weightPerMeter = weight * length;

    setTotalWeight(`${weight.toFixed(3)}`);
    setTotalWeightPerMeter(`${weightPerMeter.toFixed(3)}`);
  };

  return (
    <div className='obliczenia'> 
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          Szerokość (mm):
          <input
            type="number"
            placeholder="wpisz szerokość (mm)"
            value={x}
            onChange={(e) => {
              setX(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Wysokość (mm):
          <input
            type="number"
            placeholder="wpisz wysokość (mm)"
            value={y}
            onChange={(e) => {
              setY(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Grubość ścianki (mm):
          <input
            type="number"
            placeholder="wpisz grubość ścianki (mm)"
            value={zBox}
            onChange={(e) => {
              setZBox(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Długość kątownika (m):
          <input
            type="number"
            placeholder="wpisz długość kątownika (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>Waga profilu na metr: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg/m</p>
      <p>Waga profilu: <span style={{color: 'red', fontSize:'20px',}}>{totalWeightPerMeter}</span> kg</p>
    </div>
  );
};

export default Katowniki;
