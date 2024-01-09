import React, { useState, useEffect } from "react";

const Rura = () => {
  const [diameter, setDiameter] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [diameter / 100, thickness / 100, length]);

  const calculateWeight = () => {
    const outerRadius = diameter / 2; // cm
    const innerRadius = outerRadius - thickness; // cm
    const volume = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) * length * 100; // cm^3
    const weight = volume * 8 / 100000; // kg
    const weightPerMeter = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2)) * 100 * 8 / 100000; // kg/m

    setTotalWeight(`${weight.toFixed(3)}`);
    setTotalWeightPerMeter(`${weightPerMeter.toFixed(3)}`);
  };

  return (
    <div className='obliczenia'> 
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          Średnica (mm):
          <input
            type="number"
            placeholder="wpisz średnicę (mm)"
            value={diameter}
            onChange={(e) => {
              setDiameter(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Grubość ścianki (mm):
          <input
            type="number"
            placeholder="wpisz grubość ścianki (mm)"
            value={thickness}
            onChange={(e) => {
              setThickness(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Długość rury (m):
          <input
            type="number"
            placeholder="wpisz długość rury (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>Masa na metr rury: <span style={{color: 'red', fontSize:'20px',}}>{totalWeightPerMeter}</span> kg/m</p>
      <p>Całkowita masa rury: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg</p>
    </div>
  );
};

export default Rura;
