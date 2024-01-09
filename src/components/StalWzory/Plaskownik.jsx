import React, { useState, useEffect } from "react";

const Plaskownik = () => {
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [width / 100, thickness / 100, length]);

  const calculateWeight = () => {
    const volume = width * thickness * length * 100; // cm^3
    const weight = volume * 8 / 100000; // kg
    const weightPerMeter = (width * thickness * 1 * 10 * 8) / 10000; // kg/m

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
            placeholder="wpisz szerokość płaskownika (mm)"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Grubość (mm):
          <input
            type="number"
            placeholder="wpisz grubość płaskownika (mm)"
            value={thickness}
            onChange={(e) => {
              setThickness(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Długość płaskownika (m):
          <input
            type="number"
            placeholder="wpisz długość płaskownika(m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>Waga płaskownika: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg</p>
      <p>Przybliżona waga na metr płaskownika: <span style={{color: 'red', fontSize:'20px',}}>{totalWeightPerMeter}</span> kg/m</p>
    </div>
  );
};

export default Plaskownik;
