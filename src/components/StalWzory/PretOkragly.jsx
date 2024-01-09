import React, { useState, useEffect } from "react";

const PretOkragly = () => {
  const [diameter, setDiameter] = useState("");
  const [length, setLength] = useState("");
  const [weightPerMeter, setWeightPerMeter] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [diameter, length]);

  const calculateWeight = () => {
    const radius = diameter / 2; // przeliczam średnicę na promień
    const volume = Math.PI * Math.pow(radius, 2) * length * 100 * 8; // Masa
    const volumeKg = volume / 100000;
    const volumeMeter = (Math.PI * Math.pow(radius, 2) * 1 * 8) / 1000;

    setWeightPerMeter(` ${volumeMeter.toFixed(3)}`);
    setTotalWeight(` ${volumeKg.toFixed(3)}`);
  };

  return (
    <div className="obliczenia">
      <section style={{display:'flex', gap:'50px',}}>
        <label>
          Średnica pręta (mm):
          <input
            type="number"
            placeholder="wpisz średnicę pręta (mm)"
            value={diameter}
            onChange={(e) => {
              setDiameter(e.target.value);
            }}
          />
        </label>
        <label>
          Długość pręta (m):
          <input
            type="number"
            placeholder="wpisz długość pręta (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </label>
      </section>
      <br />
      <p>Waga na metr pręta: <span style={{color: 'red', fontSize:'20px',}}>{weightPerMeter}</span> kg/m</p>
      <p>Całkowita waga pręta: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg</p>
    </div>
  );
};

export default PretOkragly;
