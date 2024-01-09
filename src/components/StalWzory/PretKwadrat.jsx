import React, { useState, useEffect } from "react";

const PretKwadratowy = () => {
  const [sideLength, setSideLength] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerKg, setTotalWeightPerKg] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [sideLength / 100, length]);

  const calculateWeight = () => {
    const volume = (Math.pow(sideLength / 100, 2) * length) * 10; // Obliczam objętość
    const weight = volume * 8; // Obliczam masę
    const volumeMeter = Math.pow(sideLength / 100, 2) * 10 * 8; // Waga na metr

    setTotalWeight(`${weight.toFixed(3)}`);
    setTotalWeightPerKg(`${volumeMeter.toFixed(3)}`);
  };

  return (
    <div className='obliczenia'> 
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          Długość boku pręta (mm):
          <input
            type="number"
            placeholder="wpisz długość boku pręta (mm)"
            value={sideLength}
            onChange={(e) => {
              setSideLength(e.target.value);
            }}
          />
        </label>
        <br />
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
      <p>Waga na metr pręta: <span style={{color: 'red', fontSize:'20px',}}>{totalWeightPerKg}</span> kg/m</p>
      <p>Całkowita waga pręta: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg</p>
    </div>
  );
};

export default PretKwadratowy;
