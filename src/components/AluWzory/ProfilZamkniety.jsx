import React, { useState, useEffect, useCallback } from "react";

const ProfilZamkniety = ({ density, onWeightChange }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [zBox, setZBox] = useState("");
  const [length, setLength] = useState("");

  const calculateWeight = useCallback(() => {
    const outerVolume = x * y * 1000;
    const innerVolume = (x - 2 * zBox) * (y - 2 * zBox) * 1000;
    const volume = outerVolume - innerVolume;
    const weightPerMeter = (volume * density) / 1000000; // Assuming the density of aluminium is density g/cm^3
    const totalWeight = weightPerMeter * length;

    onWeightChange({
      totalWeight: totalWeight.toFixed(3),
      totalWeightPerKg: weightPerMeter.toFixed(3),
    });
  }, [x, y, zBox, length, density, onWeightChange]);

  useEffect(() => {
    calculateWeight();
  }, [calculateWeight]);

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
