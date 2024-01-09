import React, { useState, useEffect } from "react";

const ProfilZamkniety = () => {
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
    const calculatedWeight = zBox * (2 * (x / 1000) + 2 * (y / 1000)) * 2.7 / 1000 ; // kg/cm
    const weight = calculatedWeight * length * 100; // kg
    const weightPerMeter = weight / length * 10; // kg/m

    setTotalWeight(`${(weight*10).toFixed(3)}`);
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
          Długość profilu (m):
          <input
            type="number"
            placeholder="wpisz długość profilu (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>Waga profilu na metr: <span style={{color: 'red', fontSize:'20px',}}>{totalWeightPerMeter}</span> kg/m</p>
      <p>Waga profilu: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg</p>
    </div>
  );
};

export default ProfilZamkniety;
