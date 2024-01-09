import React, { useState, useEffect } from "react";

const ProfilZamknietyKwadratowy = () => {
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [width / 1000, thickness / 1000, length]);

  const calculateWeight = () => {
    const outerVolume = Math.pow(width / 1000, 2) * 1000;
    const innerVolume = Math.pow((width - 2 * thickness) / 1000, 2) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = volume * 2.7; // Assuming the density of aluminium is 2.7 g/cm^3
    const totalWeight = weightPerMeter * length;

    setTotalWeight(`${totalWeight.toFixed(3)}`);
    setTotalWeightPerMeter(`${weightPerMeter.toFixed(3)}`);
  };

  return (
    <div className='obliczenia'> 
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          Szerokość (mm):
          <input
            type="number"
            placeholder="wpisz szerokość profilu (mm)"
            value={width}
            onChange={(e) => {
              setWidth(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Grubość ścianki (mm):
          <input
            type="number"
            placeholder="wpisz grubość ścianki profilu (mm)"
            value={thickness}
            onChange={(e) => {
              setThickness(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Długość profilu(m):
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
      <p>Masa na metr profilu: <span style={{color: 'red', fontSize:'20px',}}>{totalWeightPerMeter}</span> kg/m</p>
      <p>Całkowita masa profilu: <span style={{color: 'red', fontSize:'20px',}}>{totalWeight}</span> kg</p>
    </div>
  );
};

export default ProfilZamknietyKwadratowy;
