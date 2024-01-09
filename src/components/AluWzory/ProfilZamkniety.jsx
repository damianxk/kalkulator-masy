import React, { useState, useEffect } from "react";

const ProfilZamkniety = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [zBox, setZBox] = useState('');
  const [length, setLength] = useState('');
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [x / 1000, y / 1000, zBox / 1000, length]);

  const calculateWeight = () => {
    const outerVolume = x * y * 1000;
    const innerVolume = (x - 2 * zBox) * (y - 2 * zBox) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = (volume * 2.7) / 1000000; // Assuming the density of aluminium is 2.7 g/cm^3
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
            placeholder="wpisz wysokość profilu (mm)"
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
            placeholder="wpisz grubość ścianki profilu (mm)"
            value={zBox}
            onChange={(e) => {
              setZBox(e.target.value);
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

export default ProfilZamkniety;
