import React, { useState, useEffect } from "react";

const ProfilZamkniety = ({ density, onWeightChange }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const [totalWeightPerMeter, setTotalWeightPerMeter] = useState(0);

  useEffect(() => {
    calculateWeight();
  }, [x / 1000, y / 1000, zBox / 1000, length, density]);

  const calculateWeight = () => {
    const outerVolume = x * y * 1000;
    const innerVolume = (x - 2 * zBox) * (y - 2 * zBox) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = (volume * density) / 1000000; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length;

    setTotalWeight(`${totalWeight.toFixed(3)}`);
    setTotalWeightPerMeter(`${weightPerMeter.toFixed(3)}`);
    onWeightChange({
      totalWeight: totalWeight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  };

  return (
    <div className="obliczenia">
      <section style={{ display: "flex", gap: "50px" }}>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[A] Wpisz szerokość profilu (mm)"
            value={x}
            onChange={(e) => {
              setX(e.target.value);
            }}
            name="szerokosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[B] Wpisz wysokość profilu (mm)"
            value={y}
            onChange={(e) => {
              setY(e.target.value);
            }}
            name="wysokosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[C] Wpisz grubość ścianki (mm)"
            value={zBox}
            onChange={(e) => {
              setZBox(e.target.value);
            }}
            name="grubosc"
          />
        </label>
        <label>
          <input
            inputMode="decimal"
            type="number"
            placeholder="[D] Wpisz długość profilu (m)"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            name="dlugosc"
          />
        </label>
      </section>
    </div>
  );
};

export default ProfilZamkniety;
